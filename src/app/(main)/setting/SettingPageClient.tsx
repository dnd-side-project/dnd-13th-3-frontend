"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { UserProfileResponse } from "@/types/auth";

interface SettingPageClientProps {
  user: UserProfileResponse | null;
}

export function SettingPageClient({ user }: SettingPageClientProps) {
  const router = useRouter();

  console.log("🔍 SettingPageClient 렌더링:", { user });
  console.log("🔍 사용자 정보 상세:", {
    nickname: user?.nickname,
    characterIndex: user?.characterIndex,
    goal: user?.goal,
    id: user?.id
  });
  console.log("🔍 characterIndex 상세:", {
    value: user?.characterIndex,
    type: typeof user?.characterIndex,
    characterImage: user?.characterIndex ? `/images/logos/Charater${user.characterIndex}.svg` : 'undefined'
  });

  const handleBack = () => {
    router.back();
  };

  const handleEditProfile = () => {
    router.push("/setting/edit");
  };

  const handleNotificationSettings = () => {
    // TODO: 알림 설정 페이지로 이동
    console.log("알림 설정");
  };

  const handleContact = () => {
    // TODO: 1:1 문의 페이지로 이동
    console.log("1:1 문의");
  };

  const handleLogout = () => {
    // TODO: 로그아웃 처리
    console.log("로그아웃");
  };

  const getCharacterImage = (characterIndex: number) => {
    return `/images/logos/Charater${characterIndex}.svg`;
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">사용자 정보를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <button onClick={handleBack} className="p-2">
          <Image
            src="/images/logos/ArrowBottom.svg"
            alt="뒤로가기"
            width={24}
            height={24}
            className="rotate-90"
          />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">설정</h1>
        <div className="w-10"></div>
      </div>

      {/* 프로필 섹션 */}
      <div className="bg-white mt-4 px-4 py-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <Image
              src={getCharacterImage(user.characterIndex || 1)}
              alt="프로필 캐릭터"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-900">
              {user.nickname}님
            </span>
            <button onClick={handleEditProfile} className="p-1">
              <Image
                src="/images/logos/Pencil.svg"
                alt="프로필 수정"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>

      {/* 알림 설정 섹션 */}
      <div className="bg-white mt-4 px-4 py-4">
        <h2 className="text-base font-medium text-gray-900 mb-3">알림설정</h2>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logos/Setting.svg"
              alt="알림"
              width={20}
              height={20}
            />
            <span className="text-gray-700">알림 설정</span>
          </div>
          <div className="w-12 h-6 bg-blue-500 rounded-full relative">
            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
          </div>
        </div>
      </div>

      {/* 이용 안내 섹션 */}
      <div className="bg-white mt-4 px-4 py-4">
        <h2 className="text-base font-medium text-gray-900 mb-3">이용안내</h2>
        
        <div className="space-y-3">
          <button
            onClick={handleContact}
            className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos/Record.svg"
                alt="1:1 문의"
                width={20}
                height={20}
              />
              <span className="text-gray-700">1:1 문의</span>
            </div>
            <Image
              src="/images/logos/ArrowBottom.svg"
              alt="화살표"
              width={16}
              height={16}
              className="rotate-90"
            />
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos/Home.svg"
                alt="로그아웃"
                width={20}
                height={20}
              />
              <span className="text-gray-700">로그아웃</span>
            </div>
            <Image
              src="/images/logos/ArrowBottom.svg"
              alt="화살표"
              width={16}
              height={16}
              className="rotate-90"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
