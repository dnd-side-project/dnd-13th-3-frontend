"use client";

import { useMemo, useState } from "react";

type Segment = "today" | "week";

export default function RecordPage() {
  const [segment, setSegment] = useState<Segment>("today");

  const dateLabel = useMemo(() => {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    }).format(now);
    return `${formatted}${segment === "today" ? " (오늘)" : ""}`;
  }, [segment]);

  return (
    <div className='w-full min-h-[100dvh] bg-white overflow-y-auto flex flex-col pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]'>
      {/* Page Header (provided by (main)/layout via <Logo />) */}

      {/* Report Controls */}
      <section className='w-full px-screen-margin'>
        <div className='w-full max-w-[1100px] mx-auto mt-4 flex flex-col items-center gap-6 sm:gap-7'>
          <div
            className='w-full bg-gray-200 p-1 rounded-full flex'
            role='tablist'
            aria-label='기간 선택'
          >
            <button
              type='button'
              role='tab'
              aria-selected={segment === "today"}
              aria-controls='panel-today'
              id='tab-today'
              onClick={() => setSegment("today")}
              className={`flex-1 py-2 rounded-full text-body-1 font-medium transition-colors ${
                segment === "today"
                  ? "bg-white text-gray-900 shadow-sm font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              오늘
            </button>
            <button
              type='button'
              role='tab'
              aria-selected={segment === "week"}
              aria-controls='panel-week'
              id='tab-week'
              onClick={() => setSegment("week")}
              className={`flex-1 py-2 rounded-full text-body-1 font-medium transition-colors ${
                segment === "week"
                  ? "bg-white text-gray-900 shadow-sm font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              주간
            </button>
          </div>
          <p className='m-0 text-body-1 font-medium text-gray-700 text-center'>
            {dateLabel}
          </p>
        </div>
      </section>

      {/* Details */}
      <section
        className='w-full mt-6 px-screen-margin'
        role='tabpanel'
        id={segment === "today" ? "panel-today" : "panel-week"}
        aria-labelledby={segment === "today" ? "tab-today" : "tab-week"}
      >
        <div className='w-full max-w-[1100px] mx-auto flex flex-col gap-4 md:gap-6'>
          {/* Top cards: responsive grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            {/* Screentime Card */}
            <article className='bg-white rounded-xl p-5 sm:p-6 flex flex-col items-center gap-3 border border-gray-200 shadow-xs'>
              {/* Hourglass icon (rotating) */}
              <div className='w-9 h-9 rounded-md flex items-center justify-center'>
                <img
                  src='/images/logos/Icon/Normal/Hourglass.svg'
                  alt='모래시계 아이콘'
                />
              </div>
              <div className='text-center'>
                <p className='m-0 text-label-1 text-gray-600'>
                  오늘의 스크린타임
                </p>
                <h2 className='m-0 text-title-2 text-gray-900 font-semibold'>
                  8시간 32분
                </h2>
              </div>
              <div className='bg-gray-100 border border-white rounded-2xl px-3 py-2 inline-flex items-center gap-1 text-caption-1 text-gray-600 font-medium'>
                <span className='w-0 h-0 border-l-4 border-r-4 border-transparent border-t-5 border-t-primary [border-top-width:5px]' />
                목표보다{" "}
                <span className='text-primary font-semibold'>32분</span> 덜
                사용했어요!
              </div>
            </article>

            {/* Insights Card */}
            <article className='bg-white rounded-xl p-5 flex flex-col gap-6 border border-gray-200 shadow-xs'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-1 text-label-1 text-gray-500'>
                  <img
                    src='/images/logos/Icon/Normal/Graph Next.svg'
                    alt='그래프 아이콘'
                    className='w-6 h-6'
                  />
                  <span>어제와 비교</span>
                </div>
                <p className='m-0 text-body-1 font-medium text-gray-900'>
                  목표 달성률 2% 증가
                </p>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-1 text-label-1 text-gray-500'>
                  <img
                    src='/images/logos/Icon/Normal/Sprout.svg'
                    alt='새싹 아이콘'
                    className='w-6 h-6'
                  />
                  <span>내일 추천 목표</span>
                </div>
                <p className='m-0 text-body-1 font-medium text-gray-900'>
                  오늘보다 30분만 더 줄여 볼까요?
                </p>
              </div>
            </article>
          </div>

          {/* App Usage */}
          <div className='flex flex-col gap-3'>
            <h3 className='m-0 text-label-1 text-gray-600 px-1'>
              앱 별 사용량
            </h3>
            <div className='bg-white rounded-xl px-4 py-2 flex flex-col border border-gray-200 shadow-xs'>
              {/* KakaoTalk */}
              <div className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                  <img src='/images/logos/KakaoTalk.svg' alt='카카오톡 로고' className='w-6 h-6' />
                  <span>카카오톡</span>
                </div>
                <span className='text-caption-1 text-gray-500'>1시간 12분</span>
              </div>

              {/* Instagram */}
              <div className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                  <img src='/images/logos/insta.svg' alt='인스타그램 로고' className='w-6 h-6' />
                  <span>인스타그램</span>
                </div>
                <span className='text-caption-1 text-gray-500'>2시간 05분</span>
              </div>

              {/* Chrome */}
              <div className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                  <img src='/images/logos/chrome.svg' alt='크롬 로고' className='w-6 h-6' />
                  <span>크롬</span>
                </div>
                <span className='text-caption-1 text-gray-500'>48분</span>
              </div>

              {/* YouTube */}
              <div className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                  <img src='/images/logos/youtube.svg' alt='유튜브 로고' className='w-6 h-6' />
                  <span>YouTube</span>
                </div>
                <span className='text-caption-1 text-gray-500'>4시간 28분</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
