import Image from "next/image";

interface ProgressSectionProps {
  targetTime: {
    hours: number;
    minutes: number;
  };
}

export default function ProgressSection({ targetTime }: ProgressSectionProps) {
  return (
    <div className='relative w-full flex flex-col items-center w-[303px] left-1/2 transform -translate-x-1/2 mt-[243px]'>
      <div className='h-3 bg-white rounded-lg flex relative w-[303px]'>
        <div className='w-1/2 h-3 bg-indigo-500 rounded-lg' />
        {/* 미누 캐릭터 */}
        <div className='absolute bottom-1 left-0 z-30'>
          <Image
            src='/images/logos/MinuDefault.svg'
            alt='Minu Default'
            width={51.5}
            height={51.5}
            priority
          />
        </div>
        <div className='absolute -bottom-5 w-full flex justify-between items-center'>
          <div className='text-gray-500 text-sm font-medium font-pretendard'>
            치유중
          </div>
          <div className='text-gray-500 text-sm font-medium font-pretendard'>
            {targetTime.minutes > 0
              ? `${targetTime.hours}시간 ${targetTime.minutes}분`
              : `${targetTime.hours}시간`}
          </div>
        </div>
      </div>
    </div>
  );
}
