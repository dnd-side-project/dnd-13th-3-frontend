import { LoginLogo } from "@/components";

export default function LoginContent() {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-[72px] px-4'>
      <p className='text-gray-100 text-pretendard mb-4'>
        <span className='font-normal'>나를 지키는 </span>
        <span className='font-bold'>작은 습관</span>
      </p>
      <LoginLogo />
    </div>
  );
}
