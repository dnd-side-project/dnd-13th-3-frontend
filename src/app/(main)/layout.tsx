"use client";

import { BottomNavbar, Logo } from "@/components";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isChallengePage = pathname === "/challenge";

  return (
    <div className='flex flex-col'>
      <div className={`pt-4 px-screen-margin ${isChallengePage ? 'bg-primary' : ''}`}>
        {isChallengePage ? (
          <div className="flex justify-between items-center">
            <Image
              src="/images/logos/MinuLogoWhite.svg"
              alt="MINU Logo"
              width={84}
              height={24}
              priority
            />
            <button className="">
              <Image
                src="/images/logos/Setting.svg"
                alt="Settings"
                width={24}
                height={24}
              />
            </button>
          </div>
        ) : (
          <Logo />
        )}
      </div>
      <div className='flex-1 overflow-y-auto'>{children}</div>
      <BottomNavbar />
    </div>
  );
}
