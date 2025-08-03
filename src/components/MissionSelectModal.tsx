"use client";

import { useState, useCallback, useMemo } from "react";
import { MISSION_OPTIONS } from "@/lib/constants";
import MissionOptionButton from "./MissionOptionButton";

interface MissionSelectModalProps {
  selectedMission: string;
  onSelect: (mission: string) => void;
  onClose: () => void;
}

export default function MissionSelectModal({ selectedMission, onSelect, onClose }: MissionSelectModalProps) {
  const [customMission, setCustomMission] = useState("");
  const [isCustomInput, setIsCustomInput] = useState(false);

  const handleMissionSelect = useCallback((mission: string) => {
    if (isCustomInput) {
      onSelect(customMission);
    } else {
      onSelect(mission);
    }
    onClose();
  }, [isCustomInput, customMission, onSelect, onClose]);

  const handleCustomInput = useCallback(() => {
    setIsCustomInput(true);
    setCustomMission("");
  }, []);

  const isComplete = useMemo(() => {
    return isCustomInput ? customMission.trim() : selectedMission;
  }, [isCustomInput, customMission, selectedMission]);

  const firstRowMissions = useMemo(() => MISSION_OPTIONS.slice(0, 3), []);
  const secondRowMissions = useMemo(() => MISSION_OPTIONS.slice(3), []);

  return (
    <div className='fixed inset-0 bg-dim-background flex items-end z-50' onClick={onClose}>
      <div className='bg-white w-full max-w-mobile mx-auto rounded-t-[39px] max-h-[70vh] overflow-y-auto animate-slide-up' onClick={(e) => e.stopPropagation()}>
        {/* 드래그 핸들 */}
        <div className='h-4 px-2.5 bg-white rounded-t-[39px] rounded-tr-[34px] flex flex-col justify-end items-center'>
          <div className='w-12 h-1 bg-neutral-200 rounded-[40px]'></div>
        </div>
        
        {/* 제목 */}
        <div className='px-screen-margin py-[20px] bg-white'>
          <h2 className='text-xl font-semibold text-gray-900 mb-1'>미션을 선택해주세요.</h2>
          <p className='text-xs font-medium text-gray-400 leading-none tracking-tight'>뱃지를 선택하거나 직접 입력해주세요.</p>
        </div>

        {/* 미션 옵션들 */}
        <div className='px-screen-margin pb-6 bg-white flex flex-col gap-2'>
          <div className='flex flex-wrap gap-2'>
            {firstRowMissions.map((mission) => (
              <MissionOptionButton
                key={mission}
                mission={mission}
                isSelected={selectedMission === mission && !isCustomInput}
                onClick={() => {
                  setIsCustomInput(false);
                  onSelect(mission);
                }}
              />
            ))}
          </div>
          <div className='flex flex-wrap gap-2'>
            {secondRowMissions.map((mission) => (
              <MissionOptionButton
                key={mission}
                mission={mission}
                isSelected={selectedMission === mission && !isCustomInput}
                onClick={() => {
                  setIsCustomInput(false);
                  onSelect(mission);
                }}
              />
            ))}
          </div>
        </div>

        {/* 직접 입력 버튼 */}
        <div className='px-screen-margin pb-6 bg-white'>
          <button
            type='button'
            onClick={handleCustomInput}
            className='py-2 text-primary text-xs font-semibold'
          >
            직접 입력+
          </button>

          {/* 직접 입력 필드 */}
          {isCustomInput && (
            <div className='flex flex-col items-center gap-2'>
              <div className='w-full flex flex-col items-end gap-2'>
                <div className='w-full h-11 relative bg-white border-b-2 border-gray-100'>
                  <input
                    type='text'
                    value={customMission}
                    onChange={(e) => setCustomMission(e.target.value)}
                    placeholder='미션을 입력해주세요'
                    className='w-full h-full text-xl font-semibold text-gray-400 leading-7 focus:outline-none'
                    maxLength={10}
                    autoFocus
                  />
                </div>
                <span className='text-xs font-normal text-gray-400 leading-none tracking-tight'>
                  ({customMission.length}/10)
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 완료 버튼 */}
        <div className='px-screen-margin bg-white rounded-bl-2xl rounded-br-2xl'>
          <button
            type='button'
            onClick={() => handleMissionSelect(selectedMission)}
            disabled={!isComplete}
            className={`w-full transition-colors ${
              isComplete
                ? 'btn-main btn-primary'
                : 'btn-main btn-disabled'
            }`}
          >
            완료
          </button>
        </div>
        
        {/* 하단 여백 */}
        <div className='h-8 relative backdrop-blur-lg'>
          <div className='w-32 h-[5px] left-1/2 top-[21px] absolute bg-neutral-900 rounded-md transform -translate-x-1/2'></div>
        </div>
      </div>
    </div>
  );
} 