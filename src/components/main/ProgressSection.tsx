import Image from "next/image";

export default function ProgressSection() {
  return (
    <div className="w-full flex flex-col z-20 relative">
      <div className="w-full flex justify-between items-center mb-2">
        <div className="text-center justify-center text-gray-500 text-sm font-medium font-pretendard leading-tight tracking-tight">
          치유중
        </div>
        <div className="text-center justify-center text-gray-500 text-sm font-medium font-pretendard leading-tight tracking-tight">
          7시간
        </div>
      </div>
      <div className="w-full h-3 bg-white rounded-lg flex relative">
        <div className="w-1/2 h-3 bg-indigo-500 rounded-lg" />
        {/* 미누 캐릭터 - 진행률 바 위에 배치 */}
        <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 z-30">
          <Image
            src="/images/logos/MinuDefault.svg"
            alt="Minu Default"
            width={51.5}
            height={51.5}
            priority
          />
        </div>
      </div>
    </div>
  );
}
