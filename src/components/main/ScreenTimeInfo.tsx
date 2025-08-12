export default function ScreenTimeInfo() {
  return (
    <div className="relative justify-center items-center">
      <div className="absolute left-1/2 top-[52px] transform -translate-x-1/2 text-center">
        <div className="text-gray-500 text-sm font-medium font-pretendard whitespace-nowrap">
          오늘의 스크린타임
        </div>
        <div className="text-gray-900 text-3xl font-semibold font-pretendard leading-10 whitespace-nowrap">
          3시간 32분
        </div>
      </div>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 px-3 py-2 bg-white rounded-2xl flex items-center gap-1 mt-[130px]"
      >
        <span className="text-gray-500 text-xs font-medium font-pretendard leading-none tracking-tight whitespace-nowrap">
          혼자 있는 시간 디지털 없이 보내기
        </span>
        <img src="/images/logos/Icon/Normal/Pencil.svg" alt="수정" width={14} height={14} className="flex-shrink-0" />
      </div>
    </div>
  );
}
