export default function StatsCards() {
  return (
    <div className="w-full flex justify-start items-center gap-2">
      <div className="w-40 px-5 py-3 bg-gray-100 rounded-2xl flex justify-start items-start gap-1">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex justify-start items-start gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400" />
            </div>
            <div className="text-center justify-center text-gray-400 text-sm font-medium font-pretendard leading-tight tracking-tight">
              목표 시간
            </div>
          </div>
          <div className="w-32 flex justify-between items-center">
            <div className="text-center justify-center text-gray-900 text-xl font-semibold font-pretendard leading-7">
              7시간
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-5 h-5 bg-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-40 px-5 py-3 bg-gray-100 rounded-2xl flex justify-start items-center gap-1">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex justify-start items-start gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400" />
            </div>
            <div className="text-center justify-center text-gray-400 text-sm font-medium font-pretendard leading-tight tracking-tight">
              오늘의 성공률
            </div>
          </div>
          <div className="text-center justify-center text-gray-900 text-xl font-semibold font-pretendard leading-7">
            83%
          </div>
        </div>
      </div>
    </div>
  );
}
