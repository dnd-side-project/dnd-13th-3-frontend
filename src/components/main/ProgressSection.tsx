import Image from "next/image";

export default function ProgressSection() {
  return (
    <div className="absolute justify-between items-center z-20 w-[303px] left-1/2 transform -translate-x-1/2">
      <div className="flex justify-between items-center mb-2 mt-[243px]">
        <div className="text-center justify-center text-gray-500 text-sm font-medium font-pretendard leading-tight tracking-tight">
          치유중
        </div>
        <div className="text-center justify-center text-gray-500 text-sm font-medium font-pretendard leading-tight tracking-tight">
          7시간
        </div>
      </div>
      <div className="h-3 bg-white rounded-lg flex relative w-[303px]">
        <div className="w-1/2 h-3 bg-indigo-500 rounded-lg" />
        {/* 미누 캐릭터 */}
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
