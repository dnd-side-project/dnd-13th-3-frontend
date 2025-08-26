import { ChallengeSuccess } from "@/components/challenge";
import { Suspense } from "react";

export default async function ChallengeSuccessPage() {
  return (
    <div className='h-[100dvh] px-screen-margin bg-white'>
      <Suspense fallback={null}>
        <ChallengeSuccess />
      </Suspense>
    </div>
  );
}
