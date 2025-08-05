"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoginContent } from "@/components/login";
export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className='flex flex-col min-h-screen bg-[#557AF3] relative items-center justify-center'>
      <div className='flex flex-col items-center justify-center text-center mb-[348px] px-4'>
        <LoginContent />
      </div>
    </main>
  );
}
