import Image from 'next/image';

interface ProgressSectionProps {
  todayScreenTime: number;
  goalScreenTime: number;
}

const ProgressSection = ({ todayScreenTime, goalScreenTime }: ProgressSectionProps) => {
  const progressPercentage = goalScreenTime > 0 ? (todayScreenTime / goalScreenTime) * 100 : 0;

  return (
    <div className='relative w-full max-w-full flex flex-col items-center mt-[243px]'>
      <div className={`relative h-4 w-full rounded-full ${progressPercentage <= 100 ? 'bg-white' : ''}`}
        style={progressPercentage > 100 ? {
          backgroundImage: `url('/images/logos/screentimeOver.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : {}}>
        <div className='absolute -bottom-5 w-full flex justify-between items-center'>
          <div className='text-gray-500 text-sm font-medium font-pretendard'>
            치유중
          </div>
          <div className='text-gray-500 text-sm font-medium font-pretendard'>
            {Math.floor(goalScreenTime / 60)}시간 {goalScreenTime % 60 > 0 ? `${goalScreenTime % 60}분` : ''}
          </div>
        </div>
        <div
          className={`absolute h-4 rounded-full ${progressPercentage > 100 ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
        ></div>
        <div
          className="absolute -top-8 transition-all duration-500 z-30"
          style={{ left: `calc(${progressPercentage}% - 16px)` }}
        >
          <Image src="/images/logos/MinuDefault.svg" alt="character" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
