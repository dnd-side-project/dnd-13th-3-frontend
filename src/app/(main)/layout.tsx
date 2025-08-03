import BottomNavbar from "@/components/BottomNavbar";
import Logo from "@/components/Logo";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-screen overflow-hidden px-screen-margin'>
      <div className='pt-[60px]'>
        <Logo />
      </div>
      <div className='flex-1 overflow-hidden'>{children}</div>
      <BottomNavbar />
    </div>
  );
}
