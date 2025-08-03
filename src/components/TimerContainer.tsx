"use client";

import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import TimerDisplay from "./TimerDisplay";
import MissionSelectModal from "./MissionSelectModal";
import ConfirmEndModal from "./ConfirmEndModal";
import ResultModal from "./ResultModal";

interface TimerState {
  isRunning: boolean;
  isPaused: boolean;
  elapsedTime: number;
  selectedMission: string;
  showMissionModal: boolean;
  showConfirmModal: boolean;
  showResultModal: boolean;
}

const INITIAL_STATE: TimerState = {
  isRunning: false,
  isPaused: false,
  elapsedTime: 0,
  selectedMission: "",
  showMissionModal: false,
  showConfirmModal: false,
  showResultModal: false,
};

export default function TimerContainer() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  
  const [state, setState] = useState<TimerState>(INITIAL_STATE);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    localStorage.removeItem('timerState');
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (state.isRunning || state.isPaused) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [state.isRunning, state.isPaused]);

  useEffect(() => {
    if (isMounted && (state.isRunning || state.isPaused)) {
      localStorage.setItem('timerState', JSON.stringify({
        ...state,
        startTime: startTimeRef.current
      }));
    }
  }, [state, isMounted]);

  const startTimer = useCallback(() => {
    if (!state.selectedMission) {
      setState(prev => ({ ...prev, showMissionModal: true }));
      return;
    }

    const now = Date.now();
    startTimeRef.current = state.isPaused ? now - state.elapsedTime : now;
    
    setState(prev => ({ 
      ...prev, 
      isRunning: true, 
      isPaused: false,
      showMissionModal: false 
    }));

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setState(prev => ({ ...prev, elapsedTime: elapsed }));
    }, 100);
  }, [state.selectedMission, state.isPaused, state.elapsedTime]);

  const pauseTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setState(prev => ({ ...prev, isRunning: false, isPaused: true }));
  }, []);

  const endTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    console.log("타이머 종료:", {
      mission: state.selectedMission,
      elapsedTime: state.elapsedTime,
      totalSeconds: Math.floor(state.elapsedTime / 1000)
    });

    setState(prev => ({
      ...prev,
      isRunning: false,
      isPaused: false,
      showConfirmModal: false,
      showResultModal: true
    }));
  }, [state.selectedMission, state.elapsedTime]);

  const confirmResult = useCallback(() => {
    setState(INITIAL_STATE);
    localStorage.removeItem('timerState');
    startTimeRef.current = 0;
  }, []);

  const handleEndClick = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setState(prev => ({ 
      ...prev, 
      isRunning: false, 
      isPaused: true,
      showConfirmModal: true 
    }));
  }, []);

  const handleContinueClick = useCallback(() => {
    const now = Date.now();
    startTimeRef.current = now - state.elapsedTime;
    
    setState(prev => ({ 
      ...prev, 
      isRunning: true, 
      isPaused: false,
      showConfirmModal: false 
    }));

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setState(prev => ({ ...prev, elapsedTime: elapsed }));
    }, 100);
  }, [state.elapsedTime]);

  const handleMissionSelect = useCallback(() => {
    if (state.isRunning || state.isPaused) {
      alert('타이머 실행 중에는 모드를 변경할 수 없습니다.');
      return;
    }
    setState(prev => ({ ...prev, showMissionModal: true }));
  }, [state.isRunning, state.isPaused]);

  const selectMission = useCallback((mission: string) => {
    setState(prev => ({ ...prev, selectedMission: mission }));
  }, []);

  const closeMissionModal = useCallback(() => {
    setState(prev => ({ ...prev, showMissionModal: false }));
  }, []);

  const buttonState = useMemo(() => {
    const isActive = state.isRunning || state.isPaused;
    return {
      showStartButton: !isActive,
      showActionButtons: isActive,
      isPaused: state.isPaused
    };
  }, [state.isRunning, state.isPaused]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className='max-w-mobile mx-auto w-full h-full flex flex-col'>
      <TimerDisplay
        elapsedTime={state.elapsedTime}
        selectedMission={state.selectedMission}
        onSelectMission={handleMissionSelect}
        isModalOpen={state.showMissionModal}
      />

      <div className='flex gap-3 mt-8'>
        {buttonState.showStartButton ? (
          <button
            type='button'
            onClick={startTimer}
            className='flex-1 btn-medium btn-primary'
          >
            시작
          </button>
        ) : (
          <>
            <button
              type='button'
              onClick={buttonState.isPaused ? startTimer : pauseTimer}
              className='flex-1 btn-medium btn-secondary'
            >
              {buttonState.isPaused ? "이어서 시작" : "일시정지"}
            </button>
            <button
              type='button'
              onClick={handleEndClick}
              className='flex-1 btn-medium btn-primary'
            >
              끝내기
            </button>
          </>
        )}
      </div>

      {state.showMissionModal && (
        <MissionSelectModal
          selectedMission={state.selectedMission}
          onSelect={selectMission}
          onClose={closeMissionModal}
        />
      )}

      {state.showConfirmModal && (
        <ConfirmEndModal
          onConfirm={endTimer}
          onCancel={handleContinueClick}
        />
      )}

      {state.showResultModal && (
        <ResultModal
          mission={state.selectedMission}
          elapsedTime={state.elapsedTime}
          onConfirm={confirmResult}
        />
      )}
    </div>
  );
} 