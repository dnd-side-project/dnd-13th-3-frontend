import { LoginLogo } from "@/components";

interface LoginContentProps {
  className?: string;
}

export default function LoginContent({ className = "" }: LoginContentProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center px-4 ${className}`}
    >
      <p className='text-gray-100 text-pretendard mb-4'>
        <span className='font-normal'>나를 지키는 </span>
        <span className='font-bold'>작은 습관</span>
      </p>
      <LoginLogo />
    </div>
  );
}
