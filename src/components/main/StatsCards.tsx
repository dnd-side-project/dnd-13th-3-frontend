import { Timer, Pencil, Star } from "lucide-react";

export default function StatsCards() {
  return (
    <div className="w-full flex justify-center items-center gap-2">
      {/* 목표 시간 카드 */}
      <div className="w-40 px-5 py-3 bg-gray-100 rounded-2xl flex justify-start items-start gap-1">
        <div className="flex flex-col justify-start items-start gap-2">
          {/* 타이머 + 텍스트 */}
          <div className="flex justify-start items-center gap-1">
            <Timer size={16} strokeWidth={1.8} className="stroke-gray-400" />
            <div className="text-gray-400 text-sm font-medium font-pretendard leading-tight tracking-tight">
              목표 시간
            </div>
          </div>
          {/* 시간 + 연필 */}
          <div className="w-32 flex justify-between items-center">
            <div className="text-gray-900 text-xl font-semibold font-pretendard leading-7">
              7시간
            </div>
            <Pencil size={18} strokeWidth={1.8} className="stroke-gray-400" />
          </div>
        </div>
      </div>

      {/* 오늘의 성공률 카드 */}
      <div className="w-40 px-5 py-3 bg-gray-100 rounded-2xl flex justify-start items-center gap-1">
        <div className="flex flex-col justify-start items-start gap-2">
          {/* 별 + 텍스트 */}
          <div className="flex justify-start items-center gap-1">
            <Star size={16} strokeWidth={1.8} className="stroke-gray-400" />
            <div className="text-gray-400 text-sm font-medium font-pretendard leading-tight tracking-tight">
              오늘의 성공률
            </div>
          </div>
          {/* 성공률 */}
          <div className="text-gray-900 text-xl font-semibold font-pretendard leading-7">
            83%
          </div>
        </div>
      </div>
    </div>
  );
}
