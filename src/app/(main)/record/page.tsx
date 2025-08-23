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
    <div className='w-full h-[calc(100dvh-120px)] px-screen-margin bg-white overflow-y-auto flex flex-col'>
      {/* Page Header (provided by (main)/layout via <Logo />) */}

      {/* Report Controls */}
      <section className='w-full max-w-content mx-auto flex flex-col items-center gap-7'>
        <div className='w-full bg-gray-200 p-1 rounded-full flex'>
          <button
            type='button'
            onClick={() => setSegment("today")}
            className={`flex-1 py-2 rounded-full text-body-1 font-medium ${
              segment === "today"
                ? "bg-white text-gray-900 shadow-sm font-semibold"
                : "text-gray-500"
            }`}
          >
            오늘
          </button>
          <button
            type='button'
            onClick={() => setSegment("week")}
            className={`flex-1 py-2 rounded-full text-body-1 font-medium ${
              segment === "week"
                ? "bg-white text-gray-900 shadow-sm font-semibold"
                : "text-gray-500"
            }`}
          >
            주간
          </button>
        </div>
        <p className='m-0 text-body-1 font-medium text-gray-700'>{dateLabel}</p>
      </section>

      {/* Details */}
      <section className='w-full max-w-content mx-auto mt-6 flex flex-col gap-3'>
        {/* Screentime Card */}
        <article className='bg-white rounded-xl p-6 flex flex-col items-center gap-3 outline outline-1 outline-gray-200'>
          {/* Icon placeholder */}
          <div className='w-9 h-9 rounded-md bg-blue-100 flex items-center justify-center'>
            <div className='w-3 h-3 border-2 border-blue-500 rounded-full border-t-transparent animate-spin [animation-duration:1.2s]' />
          </div>
          <div className='text-center'>
            <p className='m-0 text-label-1 text-gray-600'>오늘의 스크린타임</p>
            <h2 className='m-0 text-title-2 text-gray-900 font-semibold'>8시간 32분</h2>
          </div>
          <div className='bg-gray-100 border border-white rounded-2xl px-3 py-2 inline-flex items-center gap-1 text-caption-1 text-gray-600 font-medium'>
            <span className='w-0 h-0 border-l-4 border-r-4 border-transparent border-t-5 border-t-primary [border-top-width:5px]' />
            목표보다 <span className='text-primary font-semibold'>32분</span> 덜 사용했어요!
          </div>
        </article>

        {/* Insights Card */}
        <article className='bg-white rounded-xl p-5 flex flex-col gap-6 outline outline-1 outline-gray-200'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1 text-label-1 text-gray-500'>
              {/* simple bar icon */}
              <div className='relative w-6 h-6'>
                <div className='absolute left-[3.5px] top-[6px] w-1.5 h-3.5 bg-primary rounded-sm' />
                <div className='absolute left-[10px] top-[2px] w-1.5 h-4.5 bg-primary rounded-sm' />
                <div className='absolute left-[16.5px] top-[10px] w-1.5 h-2.5 bg-primary rounded-sm' />
              </div>
              <span>어제와 비교</span>
            </div>
            <p className='m-0 text-body-1 font-medium text-gray-900'>목표 달성률 2% 증가</p>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1 text-label-1 text-gray-500'>
              {/* sprout icon placeholder */}
              <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center'>
                <div className='w-3 h-2 rounded-b-full bg-green-400 rotate-[-25deg]' />
              </div>
              <span>내일 추천 목표</span>
            </div>
            <p className='m-0 text-body-1 font-medium text-gray-900'>오늘보다 30분만 더 줄여 볼까요?</p>
          </div>
        </article>

        {/* App Usage */}
        <div className='flex flex-col gap-3'>
          <h3 className='m-0 text-label-1 text-gray-600 px-1'>앱 별 사용량</h3>
          <div className='bg-white rounded-xl px-4 py-2 flex flex-col outline outline-1 outline-gray-200'>
            {/* item 1 */}
            <div className='flex items-center justify-between py-2'>
              <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                <div className='w-6 h-6 rounded-md bg-white outline outline-1 outline-gray-200 grid place-items-center'>
                  <span className='w-3 h-2 bg-red-500 rounded-[2px]' />
                </div>
                <span>YouTube</span>
              </div>
              <span className='text-caption-1 text-gray-500'>4시간 28분</span>
            </div>

            {/* item 2 */}
            <div className='flex items-center justify-between py-2'>
              <div className='flex items-center gap-2 text-label-1 font-medium text-gray-900'>
                <div className='w-6 h-6 rounded-md outline outline-1 outline-gray-200 overflow-hidden' style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }} />
                <span>인스타그램</span>
              </div>
              <span className='text-caption-1 text-gray-500'>3시간</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
