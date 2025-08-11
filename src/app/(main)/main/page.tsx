import { GoalTab } from "@/components/common";
import { ScreenTimeSection, ScreenTimeInfo, ProgressSection, StatsCards } from "@/components/main";
import { TabSwitcher } from "@/components/timer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col">
      {/* 상단 탭 스위처 */}
      <div className='flex pt-[20px]'>
        <TabSwitcher />
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className='flex-1 pt-[16px] flex flex-col relative'>
        {/* 인사말 섹션 */}
        <div className='z-20 relative'>
          <GoalTab />
        </div>
        
        {/* 배경 이미지와 스크린타임 정보 섹션 */}
        <div className='flex-1 flex items-center justify-center relative'>
          <div className='flex flex-col items-center justify-center'>
            {/* 배경 이미지 */}
            <div className='absolute inset-0 flex justify-center items-center z-0'>
              <Image
                src="/images/logos/screentime.svg"
                alt="Screen Time Background"
                width={335}
                height={335}
              />
            </div>
            
            {/* 스크린타임 정보 - 배경 이미지 위에 오버레이 */}
            <div className='z-20 relative mb-32'>
              <ScreenTimeInfo />
            </div>
            
            {/* 진행률 섹션 - 배경 이미지 하단에 배치 */}
            <div className='absolute bottom-8 z-20 relative'>
              <ProgressSection />
            </div>
          </div>
        </div>
        
        {/* 통계 카드 섹션 */}
        <div className='mb-6 z-20 relative'>
          <StatsCards />
        </div>
      </div>
    </div>
  );
}
