export default function ScreenTimeInfo() {
  return (
    <div className="w-44 flex flex-col justify-center items-center gap-3">
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
  );
}
