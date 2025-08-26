import { SettingPageClient } from "@/components/setting/SettingPageClient";
import { getUserProfile } from "@/lib/api/user";

// This route reads cookies on the server via getUserProfile().
// Mark it dynamic so Next.js doesn't attempt to pre-render it statically.
export const dynamic = "force-dynamic";

export default async function SettingPage() {
  let user = null;
  try {
    user = await getUserProfile();
    console.log("✅ Setting 페이지: 프로필 조회 성공:", user);
  } catch (error) {
    console.error("❌ Setting 페이지: 프로필 조회 실패:", error);
  }

  return <SettingPageClient user={user} />;
}
