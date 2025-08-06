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
    <main className='flex flex-col min-h-screen bg-primary relative items-center justify-center'>
      <LoginContent />
    </main>
  );
}
