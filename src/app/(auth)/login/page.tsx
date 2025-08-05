import { MinuCharacter } from "@/components";
import {
  CloudLayer,
  GoogleLoginButton,
  LoginContent,
} from "@/components/login";

export default function LoginPage() {
  return (
    <main className='flex flex-col min-h-screen bg-[#557AF3] relative items-center justify-between'>
      <CloudLayer />

      {/* 미누 캐릭터 */}
      <div className='absolute top-[385px] left-1/2 translate-x-[35px] z-20'>
        <MinuCharacter />
      </div>

      <LoginContent />

      <GoogleLoginButton />
    </main>
  );
}
