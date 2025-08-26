import { MainHeader } from "@/components/main";
import MainContent from "@/components/main/MainContent";
import { getScreenTimeDay } from "@/lib/api/screentime";
import { getUserProfile } from "@/lib/api/user";

// Ensure this page is rendered per request so cookies-based API calls work
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  let userProfile = null;
  let screenTimeData = null;

  // Fetch in parallel, but don't drop both if one fails
  const [profileSettled, screenSettled] = await Promise.allSettled([
    getUserProfile(),
    getScreenTimeDay(),
  ]);

  if (profileSettled.status === "fulfilled") {
    userProfile = profileSettled.value;
    console.log("🔍 Main 페이지: 사용자 프로필 조회 결과(서버):", userProfile);
  } else {
    console.error("메인: 사용자 프로필 조회 실패:", profileSettled.reason);
  }

  if (screenSettled.status === "fulfilled") {
    screenTimeData = screenSettled.value;
    console.log("🔍 Main 페이지: 스크린타임 조회 결과(서버):", screenTimeData);
  } else {
    console.error("메인: 스크린타임 조회 실패:", screenSettled.reason);
  }

  return (
    <>
      <MainHeader />
      <MainContent
        userProfile={
          userProfile ? JSON.parse(JSON.stringify(userProfile)) : null
        }
        screenTimeData={
          screenTimeData ? JSON.parse(JSON.stringify(screenTimeData)) : null
        }
      />
    </>
  );
}
