import clsx from "clsx";
import { MinuCharacter } from "@/components";
import {
  CloudLayer,
  GoogleLoginButton,
  LoginContent,
} from "@/components/login";

export default function LoginPage() {
  return (
    <main
      className={clsx(
        "flex flex-col min-h-screen bg-primary relative items-center justify-between"
      )}
    >
      <CloudLayer />

      {/* 미누 캐릭터 */}
      <div className='absolute top-[385px] left-1/2 z-20 transform translate-x-[35px]'>
        <MinuCharacter />
      </div>

      <LoginContent className='mt-[72px]' />

      <GoogleLoginButton />
    </main>
  );
}
