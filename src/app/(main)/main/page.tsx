"use client";

import Image from "next/image";
import { useState } from "react";
import { GoalTab } from "@/components/common";
import {
  ProgressSection,
  ScreenTimeInfo,
  StatsCards,
  TimeEditModal,
} from "@/components/main";
import { TabSwitcher } from "@/components/timer";

export default function HomePage() {
  const [isTimeEditModalOpen, setTimeEditModalOpen] = useState(false);
  const [targetTime, setTargetTime] = useState({ hours: 7, minutes: 0 });

  const openTimeEditModal = () => setTimeEditModalOpen(true);
  const closeTimeEditModal = () => setTimeEditModalOpen(false);

  const handleSaveTime = (newHours: string, newMinutes: string) => {
    setTargetTime({
      hours: parseInt(newHours, 10) || 0,
      minutes: parseInt(newMinutes, 10) || 0,
    });
    closeTimeEditModal();
  };
  return (
    <div className='w-full h-full bg-white overflow-hidden flex flex-col'>
      {/* 상단 탭 스위처 */}
      <div className='flex pt-[20px]'>
        <TabSwitcher />
      </div>

      {/* 메인 콘텐츠 */}
      <div className='pt-[16px] flex flex-col relative'>
        {/* 인사말 */}
        <div className='z-20 relative'>
          <GoalTab />
        </div>

        {/* 중앙 영역 (배경 이미지 + 스크린타임 + 진행률) */}
        <div className='flex flex-col items-center justify-center relative mt-5'>
          {/* 배경 이미지 */}
          <div className='justify-center items-center z-0'>
            <Image
              src='/images/logos/screentime.svg'
              alt='Screen Time Background'
              width={335}
              height={335}
            />
          </div>

          {/* 스크린타임 & 진행률 */}
          <div className='absolute z-20 flex-col items-center justify-center w-[335px] h-[335px]'>
            <ScreenTimeInfo />
            <ProgressSection targetTime={targetTime} />
          </div>
        </div>

        {/* 통계 카드 (배경 이미지 아래) */}
        <div className='flex justify-center mt-3'>
          <StatsCards targetTime={targetTime} openModal={openTimeEditModal} />
        </div>
      </div>
      <TimeEditModal
        isOpen={isTimeEditModalOpen}
        onClose={closeTimeEditModal}
        onSave={handleSaveTime}
        initialHours={targetTime.hours}
        initialMinutes={targetTime.minutes}
      />
    </div>
  );
}
