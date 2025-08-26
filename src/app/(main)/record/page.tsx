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
          {segment === "today" ? (
            <p className='m-0 text-body-1 font-medium text-gray-700 text-center'>
              {dateLabel}
            </p>
          ) : (
            <div className='w-full flex justify-center'>
              <div className='w-80 inline-flex justify-start items-center'>
                {/* Mon */}
                <div className='flex-1 p-1 inline-flex flex-col justify-start items-center gap-1'>
                  <div className='w-10 h-10 bg-indigo-100 rounded-full outline outline-1 outline-indigo-100' />
                  <div className='text-center text-gray-400 text-caption-2 font-medium leading-none'>
                    월
                  </div>
                </div>
                {/* Tue */}
                <div className='flex-1 p-1 inline-flex flex-col justify-start items-center gap-1'>
                  <div className='w-10 h-10 bg-rose-200 rounded-full outline outline-1 outline-rose-200' />

                  <div className='text-center text-gray-400 text-caption-2 font-medium leading-none'>
                    화
                  </div>
                </div>
                {/* Wed */}
                <div className='flex-1 p-1 inline-flex flex-col justify-start items-center gap-1'>
                  <div className='w-10 h-10 bg-rose-200 rounded-full outline outline-1 outline-rose-200' />

                  <div className='text-center text-gray-400 text-caption-2 font-medium leading-none'>
                    수
                  </div>
                </div>
                {/* Thu */}
                <div className='flex-1 p-1 inline-flex flex-col justify-start items-center gap-1'>
                  <div className='w-10 h-10 bg-indigo-100 rounded-full outline outline-1 outline-indigo-100' />
                  <div className='text-center text-gray-400 text-caption-2 font-medium leading-none'>
                    목
                  </div>
                </div>
                {/* Fri */}
                <div className='flex-1 p-1 inline-flex flex-col justify-start items-center gap-1'>
                  <div className='w-10 h-10 bg-indigo-100 rounded-full outline outline-1 outline-indigo-100' />
                  <div className='text-center text-gray-400 text-caption-2 font-medium leading-none'>
                    금
                  </div>
                </div>
                {/* Sat */}
                <div className='flex-1 p-1 inline-flex flex-col justify-start items-center gap-1'>
                  <div className='w-10 h-10 bg-gray-400 rounded-full outline outline-1 outline-gray-200' />
                  <div className='text-center text-gray-400 text-caption-2 font-medium leading-none'>
                    토
                  </div>
                </div>
                {/* Sun */}
                <div className='flex-1 p-1 inline-flex flex-col justify-start items-center gap-1'>
                  <div className='w-10 h-10 bg-gray-400 rounded-full outline outline-1 outline-gray-200' />
                  <div className='text-center text-gray-400 text-caption-2 font-medium leading-none'>
                    일
                  </div>
                </div>
              </div>
            </div>
          )}
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
          {segment === "today" ? (
            <>
              {/* Screentime centered */}
              <div className='w-full flex justify-center'>
                <article className='w-full bg-white rounded-xl p-5 sm:p-6 flex flex-col items-center gap-3 border border-gray-200 shadow-xs'>
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
              </div>

              {/* Insights and App Usage side-by-side */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                {/* App Usage */}
                <div className='flex flex-col gap-3 md:order-2'>
                  <h3 className='m-0 text-label-1 text-gray-600 px-1'>
                    앱 별 사용량
                  </h3>
                  <div className='bg-white rounded-xl px-4 py-2 flex flex-col border border-gray-200 shadow-xs'>
                    {/* KakaoTalk */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                        <img
                          src='/images/logos/KakaoTalk.svg'
                          alt='카카오톡 로고'
                          className='w-6 h-6'
                        />
                        <span>카카오톡</span>
                      </div>
                      <span className='text-caption-1 text-gray-500'>
                        1시간 12분
                      </span>
                    </div>
                    {/* Instagram */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                        <img
                          src='/images/logos/insta.svg'
                          alt='인스타그램 로고'
                          className='w-6 h-6'
                        />
                        <span>인스타그램</span>
                      </div>
                      <span className='text-caption-1 text-gray-500'>
                        2시간 05분
                      </span>
                    </div>
                    {/* Chrome */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                        <img
                          src='/images/logos/chrome.svg'
                          alt='크롬 로고'
                          className='w-6 h-6'
                        />
                        <span>크롬</span>
                      </div>
                      <span className='text-caption-1 text-gray-500'>48분</span>
                    </div>
                    {/* YouTube */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                        <img
                          src='/images/logos/youtube.svg'
                          alt='유튜브 로고'
                          className='w-6 h-6'
                        />
                        <span>YouTube</span>
                      </div>
                      <span className='text-caption-1 text-gray-500'>
                        4시간 28분
                      </span>
                    </div>
                  </div>
                </div>

                {/* Insights */}
                <div className='flex flex-col gap-3 md:order-1'>
                  <h3 className='m-0 text-label-1 text-gray-600 px-1'>
                    인사이트
                  </h3>
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
              </div>
            </>
          ) : (
            <>
              {/* Weekly Screentime card (same layout as daily) */}
              <div className='w-full flex justify-center'>
                <article className='w-full bg-white rounded-xl p-5 sm:p-6 flex flex-col items-center gap-3 border border-gray-200 shadow-xs'>
                  <div className='w-9 h-9 rounded-md flex items-center justify-center'>
                    <img
                      src='/images/logos/Icon/Normal/Hourglass.svg'
                      alt='모래시계 아이콘'
                    />
                  </div>
                  <div className='text-center'>
                    <p className='m-0 text-label-1 text-gray-600'>평균</p>
                    <h2 className='m-0 text-title-2 text-gray-900 font-semibold'>
                      7시간 28분
                    </h2>
                  </div>
                  <div className='bg-gray-100 border border-white rounded-2xl px-3 py-2 inline-flex items-center gap-1 text-caption-1 text-gray-600 font-medium'>
                    <span className='w-0 h-0 border-l-4 border-r-4 border-transparent border-t-5 border-t-primary [border-top-width:5px]' />
                    목표보다{" "}
                    <span className='text-primary font-semibold'>32분</span> 덜
                    사용했어요!
                  </div>
                </article>
              </div>

              {/* Weekly: App usage and AI feedback */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                {/* App Usage (weekly) */}
                <div className='flex flex-col gap-3 md:order-2'>
                  <h3 className='m-0 text-label-1 text-gray-600 px-1'>
                    앱 별 사용량
                  </h3>
                  <div className='bg-white rounded-xl px-4 py-2 flex flex-col border border-gray-200 shadow-xs'>
                    {/* KakaoTalk */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                        <img
                          src='/images/logos/KakaoTalk.svg'
                          alt='카카오톡 로고'
                          className='w-6 h-6'
                        />
                        <span>카카오톡</span>
                      </div>
                      <span className='text-caption-1 text-gray-500'>
                        1시간 12분
                      </span>
                    </div>
                    {/* Instagram */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                        <img
                          src='/images/logos/insta.svg'
                          alt='인스타그램 로고'
                          className='w-6 h-6'
                        />
                        <span>인스타그램</span>
                      </div>
                      <span className='text-caption-1 text-gray-500'>
                        2시간 05분
                      </span>
                    </div>
                    {/* Chrome */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                        <img
                          src='/images/logos/chrome.svg'
                          alt='크롬 로고'
                          className='w-6 h-6'
                        />
                        <span>크롬</span>
                      </div>
                      <span className='text-caption-1 text-gray-500'>48분</span>
                    </div>
                    {/* YouTube */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                        <img
                          src='/images/logos/youtube.svg'
                          alt='유튜브 로고'
                          className='w-6 h-6'
                        />
                        <span>YouTube</span>
                      </div>
                      <span className='text-caption-1 text-gray-500'>
                        4시간 28분
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Feedback */}
                <div className='flex flex-col gap-3 md:order-1'>
                  <div className='flex items-center gap-1 text-label-1 text-gray-600 px-1'>
                    <img src='/images/logos/Icon/Normal/AI.svg' alt='AI 로고' className='w-6 h-6' />
                    <span>AI 피드백</span>
                  </div>
                  <article className='bg-white rounded-xl p-5 flex flex-col gap-3 border border-gray-200 shadow-xs'>
                    <p className='m-0 text-body-2 text-gray-900 font-medium whitespace-pre-line'>
                      📊 오늘 평균 사용 시간 오늘은 총 3시간 20분 동안
                      스마트폰을 사용했어요. 하루 중 오후 10시부터 자정까지
                      집중적으로 사용했어요. 🧾 오늘 사용 요약 그중 절반 이상이
                      SNS와 엔터테인먼트에 쓰였어요. 특히 유튜브와 인스타그램
                      사용 시간이 길었네요. 생산성 앱은 30분 정도로 유지됐어요.
                      💡 추천 행동 오늘은 자기 전 30분만 스마트폰을 내려두는 걸
                      목표로 해볼까요? 눈이 편안해질 거예요. 또는 SNS 앱을 하루
                      한 번만 열어보는 것도 좋은 시작이에요.
                    </p>
                  </article>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
