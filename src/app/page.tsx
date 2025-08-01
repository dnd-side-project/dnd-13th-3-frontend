import Logo from "@/components/Logo";
import TabSwitcher from "@/components/TabSwitcher";
import TabContent from "@/components/TabContent";

export default function HomePage() {
  return (
    <main className='flex flex-col h-screen overflow-hidden px-screen-margin'>
      {/* 로고 영역 */}
      <div className='pt-tab-logo'>
        <Logo />
      </div>

      {/* 탭 스위처 영역 */}
      <div className='flex pt-tab-switcher'>
        <TabSwitcher />
      </div>

      {/* 탭 컨텐츠 영역 */}
      <div className='flex-1 overflow-hidden pt-tab-content'>
        <TabContent />
      </div>
    </main>
  );
}
