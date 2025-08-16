"use client";

import { useEffect, useState } from "react";

interface TimeEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (hours: string, minutes: string) => void;
  initialHours: number;
  initialMinutes: number;
}

const TimeInput = ({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => (
  <div className='flex-1 h-12 px-3 py-1.5 border-b border-gray-200 flex justify-end items-center gap-1 overflow-hidden'>
    <input
      type='number'
      value={value}
      onChange={onChange}
      className='text-right text-gray-900 text-base font-medium font-pretendard leading-normal tracking-tight bg-transparent outline-none'
      placeholder='0'
    />
    <span
      className={`text-gray-400 text-base font-medium font-pretendard leading-normal tracking-tight ${label === "시간" ? "whitespace-nowrap" : ""}`}
    >
      {label}
    </span>
  </div>
);

export default function TimeEditModal({
  isOpen,
  onClose,
  onSave,
  initialHours,
  initialMinutes,
}: TimeEditModalProps) {
  const [hours, setHours] = useState(String(initialHours));
  const [minutes, setMinutes] = useState(String(initialMinutes));

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") return setHours("");
    const n = Number.parseInt(value, 10);
    if (Number.isNaN(n)) return;
    if (n < 0 || n > 23) return;
    setHours(String(n));
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") return setMinutes("");
    const n = Number.parseInt(value, 10);
    if (Number.isNaN(n)) return;
    if (n < 0 || n > 59) return;
    setMinutes(String(n));
  };

  useEffect(() => {
    if (isOpen) {
      setHours(String(initialHours));
      setMinutes(String(initialMinutes));
    }
  }, [isOpen, initialHours, initialMinutes]);

  const handleSave = () => {
    onSave(hours, minutes);
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50'>
      <div className='w-96 bg-white rounded-t-2xl flex flex-col items-center'>
        {/* 모달 */}
        <button
          type='button'
          className='w-full h-8 flex justify-center items-center cursor-pointer'
          onClick={onClose}
        >
          <div className='w-12 h-1 bg-neutral-200 rounded-full' />
        </button>

        {/* 내용 */}
        <div className='w-80 py-4 flex flex-col items-center gap-2'>
          <p className='w-full text-gray-800 text-xs font-medium font-pretendard leading-none tracking-tight'>
            목표 시간 수정
          </p>
          <div className='w-full h-16 flex justify-start items-start gap-3 mt-2'>
            <TimeInput
              value={hours}
              onChange={handleHoursChange}
              label='시간'
            />
            <TimeInput
              value={minutes}
              onChange={handleMinutesChange}
              label='분'
            />
          </div>
        </div>

        {/* 완료버튼 */}
        <div className='w-full p-2.5 flex justify-center'>
          <button
            type='button'
            className='w-80 h-12 bg-indigo-500 rounded-xl text-white text-base font-semibold font-pretendard leading-normal tracking-tight'
            onClick={handleSave}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
}
