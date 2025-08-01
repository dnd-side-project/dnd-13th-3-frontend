'use client';

import Image from 'next/image';
import TabSwitcher from '@/components/TabSwitcher';
import GoalTab from '@/components/GoalTab';
import TimerTab from '@/components/TimerTab';
import { useTabStore } from '@/store/tabStore';

export default function HomePage() {
  const { activeTab } = useTabStore();

  return (
    <main className="relative h-screen overflow-hidden">
      <div className="px-screen-margin left-screen-margin absolute top-tab-logo">
        <Image
          src="/images/logos/MinuLogo.svg"
          alt="MINU Logo"
          width={84}
          height={24}
          priority
        />
      </div>
      <TabSwitcher />

      {activeTab === 'goal' && <GoalTab />}
      {activeTab === 'timer' && <TimerTab />}
    </main>
  );
}
