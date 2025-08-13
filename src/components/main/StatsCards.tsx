"use client";

import Image from "next/image";
import { useState } from "react";
import TimeEditModal from "./TimeEditModal";

export default function StatsCards() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [targetTime, setTargetTime] = useState({ hours: 7, minutes: 0 });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSaveTime = (newHours: string, newMinutes: string) => {
    setTargetTime({
      hours: parseInt(newHours, 10) || 0,
      minutes: parseInt(newMinutes, 10) || 0,
    });
  };
  return (
    <>
      <div className='w-full flex justify-center items-center gap-2'>
        {/* 목표 시간 카드 */}
        <div className='w-40 px-5 py-3 bg-gray-100 rounded-2xl flex justify-start items-start gap-1'>
          <div className='flex flex-col justify-start items-start gap-2'>
            {/* 타이머 + 텍스트 */}
            <div className='flex justify-start items-center gap-1'>
              <Image
                src='/images/logos/Icon/Normal/Clock.svg'
                alt='목표 시간'
                width={16}
                height={16}
              />
              <div className='text-gray-400 text-sm font-medium font-pretendard leading-tight tracking-tight'>
                목표 시간
              </div>
            </div>
            {/* 시간 + 연필 */}
            <div className='w-32 flex justify-between items-center'>
              <div className='text-gray-900 text-xl font-semibold font-pretendard leading-7'>
                {targetTime.minutes > 0
                  ? `${targetTime.hours}시간 ${targetTime.minutes}분`
                  : `${targetTime.hours}시간`}
              </div>
              <button
                type='button'
                onClick={openModal}
                className='cursor-pointer'
              >
                <Image
                  src='/images/logos/Icon/Normal/Pencil.svg'
                  alt='수정'
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
        </div>

        {/* 오늘의 성공률 카드 */}
        <div className='w-40 px-5 py-3 bg-gray-100 rounded-2xl flex justify-start items-center gap-1'>
          <div className='flex flex-col justify-start items-start gap-2'>
            {/* 별 + 텍스트 */}
            <div className='flex justify-start items-center gap-1'>
              <Image
                src='/images/logos/Icon/Normal/Star.svg'
                alt='오늘의 성공률'
                width={16}
                height={16}
              />
              <div className='text-gray-400 text-sm font-medium font-pretendard leading-tight tracking-tight'>
                오늘의 성공률
              </div>
            </div>
            {/* 성공률 */}
            <div className='text-gray-900 text-xl font-semibold font-pretendard leading-7'>
              83%
            </div>
          </div>
        </div>
      </div>
      <TimeEditModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveTime}
        initialHours={targetTime.hours}
        initialMinutes={targetTime.minutes}
      />
    </>
  );
}
