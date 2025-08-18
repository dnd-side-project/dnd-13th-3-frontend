import { GoalTab } from "@/components/common";
import { TabSwitcher } from "@/components/timer";

export default function HomePage() {
  return (
    <div className="h-[calc(100dvh-120px)] px-screen-margin">
      <div className='flex pt-[20px]'>
        <TabSwitcher />
      </div>
      <div className='flex-1 pt-[16px]'>
        <GoalTab />
      </div>
    </div>
  );
}
