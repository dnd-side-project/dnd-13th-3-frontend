"use client";

import { usePathname } from "next/navigation";
import { BottomNavbar, Logo } from "@/components";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  // 홈 관련 페이지들에만 메인 레이아웃 적용
  const isMainPage = pathname.startsWith("/home") || pathname === "/";

  if (!isMainPage) {
    return <>{children}</>;
  }

  return (
    <div className='flex flex-col h-screen px-screen-margin'>
      <div className='pt-4'>
        <Logo />
      </div>
      <div className='flex-1 overflow-y-auto'>{children}</div>
      <BottomNavbar />
    </div>
  );
}
