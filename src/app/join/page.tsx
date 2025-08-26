import JoinChallengeClient from "@/components/join/JoinChallengeClient";
import { Suspense } from "react";

export default function JoinChallengePage() {
  return (
    <Suspense fallback={null}>
      <JoinChallengeClient />
    </Suspense>
  );
}
