import GoalTab from "@/components/GoalTab";
import TabSwitcher from "@/components/TabSwitcher";

export default function HomePage() {
  return (
    <>
      <div className='flex pt-[20px]'>
        <TabSwitcher />
      </div>
      <div className='flex-1 overflow-hidden pt-[16px]'>
        <GoalTab />
      </div>
    </>
  );
}
