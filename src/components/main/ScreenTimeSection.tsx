import Image from "next/image";

export default function ScreenTimeSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <Image
          src="/images/logos/screentime.svg"
          alt="Screen Time Background"
          width={335}
          height={335}
        />
      </div>
      
      {/* 미누 캐릭터 */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src="/images/logos/MinuDefault.svg"
          alt="Minu Default"
          width={51.5}
          height={51.5}
          priority
        />
      </div>
      
      {/* 스크린타임 정보 */}
      <div className="w-44 flex flex-col justify-center items-center gap-3 mt-32 z-20">
        <div className="w-44 flex flex-col justify-center items-center gap-1">
          <div className="w-44 text-center justify-center text-gray-500 text-sm font-medium font-pretendard leading-tight tracking-tight">
            오늘의 스크린타임
          </div>
          <div className="w-44 text-center justify-center text-gray-900 text-3xl font-semibold font-pretendard leading-10">
            3시간 32분
          </div>
        </div>
        <div className="px-3 py-2 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-100 flex justify-center items-center gap-0.5">
          <div className="text-center justify-center text-gray-500 text-xs font-medium font-pretendard leading-none tracking-tight">
            혼자 있는 시간 디지털 없이 보내기
          </div>
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
