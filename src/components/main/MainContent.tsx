"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { GoalTab } from "@/components/common";
import {
  GoalEditModal,
  ProgressSection,
  ScreenTimeInfo,
  StatsCards,
  TimeEditModal,
} from "@/components/main";
import { TabSwitcher } from "@/components/timer";
import { useUserStore } from "@/stores/userStore";

export default function MainContent() {
  const { user, onboardingData } = useUserStore();
  
  // 디버깅을 위한 로그
  console.log("🔍 MainContent 렌더링:", { user, onboardingData });
  
  const [isTimeEditModalOpen, setTimeEditModalOpen] = useState(false);
  const [isGoalEditModalOpen, setGoalEditModalOpen] = useState(false);
  
  // 사용자 정보에서 목표와 스크린타임 목표 가져오기
  const goal = user?.goal?.type || onboardingData?.goal?.type || "혼자 있는 시간 디지털 없이 보내기";
  const targetTime = useMemo(() => {
    // 사용자 프로필에서 스크린타임 목표 가져오기
    const screenTimeType = user?.screenTimeGoal?.type || onboardingData?.screenTimeGoal?.type;
    
    if (screenTimeType && screenTimeType !== "custom") {
      // 분 단위로 저장된 값을 시간과 분으로 변환
      const totalMinutes = parseInt(screenTimeType);
      return {
        hours: Math.floor(totalMinutes / 60),
        minutes: totalMinutes % 60
      };
    } else if (user?.screenTimeGoal?.custom || onboardingData?.screenTimeGoal?.custom) {
      // custom인 경우 custom 값 사용
      const totalMinutes = parseInt(user?.screenTimeGoal?.custom || onboardingData?.screenTimeGoal?.custom || "0");
      return {
        hours: Math.floor(totalMinutes / 60),
        minutes: totalMinutes % 60
      };
    }
    return { hours: 7, minutes: 0 };
  }, [user, onboardingData]);
  
  const [todayScreenTime, _setTodayScreenTime] = useState(210); // 더미데이터 (3시간 30분)

  const openTimeEditModal = () => setTimeEditModalOpen(true);
  const closeTimeEditModal = () => setTimeEditModalOpen(false);

  const openGoalEditModal = () => setGoalEditModalOpen(true);
  const closeGoalEditModal = () => setGoalEditModalOpen(false);

  const handleSaveTime = (newHours: string, newMinutes: string) => {
    // TODO: API 호출로 시간 업데이트
    closeTimeEditModal();
  };

  const handleSaveGoal = (newGoal: string) => {
    // TODO: API 호출로 목표 업데이트
    closeGoalEditModal();
  };

  const goalScreenTime = useMemo(
    () => targetTime.hours * 60 + targetTime.minutes,
    [targetTime]
  );
  const isOverTime = useMemo(
    () => goalScreenTime > 0 && todayScreenTime > goalScreenTime,
    [goalScreenTime, todayScreenTime]
  );
  const backgroundImageSrc = isOverTime
    ? "/images/logos/screentimeOver.svg"
    : "/images/logos/screentime.svg";

  // 사용자 정보가 없으면 로딩 상태 표시
  if (!user) {
    return (
      <div className='w-full h-[calc(100dvh-120px)] flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-gray-700 text-sm'>사용자 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full h-[calc(100dvh-120px)] px-screen-margin bg-white overflow-y-auto flex flex-col'>
      {/* 상단 탭 스위처 */}
      <div className='flex pt-[20px]'>
        <TabSwitcher />
      </div>

      {/* 메인 콘텐츠 */}
      <div className='pt-[16px] flex flex-col relative'>
        <div className='z-20 relative'>
          <GoalTab />
        </div>

        <div className='flex flex-col items-center justify-center relative mt-5'>
          {/* 배경 이미지 */}
          <div className='w-full min-h-96 relative z-0'>
            <Image
              src={backgroundImageSrc}
              alt='Screen Time Background'
              fill
              className='object-cover'
            />
          </div>

          {/* 스크린타임 & 진행률 */}
          <div className='absolute z-20 flex-col items-center justify-center w-[303px] h-[335px] overflow-visible left-1/2 transform -translate-x-1/2'>
            <ScreenTimeInfo
              goal={goal}
              openModal={openGoalEditModal}
              todayScreenTime={todayScreenTime}
            />
            <ProgressSection
              todayScreenTime={todayScreenTime}
              goalScreenTime={targetTime.hours * 60 + targetTime.minutes}
            />
          </div>
        </div>

        {/* 통계 카드 */}
        <div className='flex justify-center mt-3'>
          <StatsCards
            targetTime={targetTime}
            openModal={openTimeEditModal}
            isOverTime={isOverTime}
            todayScreenTime={todayScreenTime}
            goalScreenTime={goalScreenTime}
          />
        </div>
      </div>

      {/* 모달들 */}
      <TimeEditModal
        isOpen={isTimeEditModalOpen}
        onClose={closeTimeEditModal}
        onSave={handleSaveTime}
        initialHours={targetTime.hours}
        initialMinutes={targetTime.minutes}
      />

      <GoalEditModal
        isOpen={isGoalEditModalOpen}
        onClose={closeGoalEditModal}
        onSave={handleSaveGoal}
        initialGoal={goal}
      />
    </div>
  );
}
