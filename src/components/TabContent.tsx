"use client";
import { useTabStore } from "@/store/tabStore";
import GoalTab from "@/components/GoalTab";
import TimerTab from "@/components/TimerTab";

export default function MainTabContent() {
  const { activeTab } = useTabStore();

  return (
    <div className='max-w-mobile mx-auto w-full h-full'>
      {activeTab === "goal" && <GoalTab />}
      {activeTab === "timer" && <TimerTab />}
    </div>
  );
}
