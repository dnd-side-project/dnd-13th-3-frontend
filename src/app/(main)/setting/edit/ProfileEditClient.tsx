"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { UserProfileResponse } from "@/types/auth";

interface ProfileEditClientProps {
  user: UserProfileResponse | null;
}

export function ProfileEditClient({ user }: ProfileEditClientProps) {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState(user?.characterIndex || 1);
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [goal, setGoal] = useState(user?.goal?.custom || user?.goal?.type || "혼자 있는 시간 디지털 없이 보내기");

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // TODO: API 호출로 프로필 업데이트
    console.log("프로필 저장:", {
      characterIndex: selectedCharacter,
      nickname,
      goal
    });
    router.back();
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
        <h1 className="text-lg font-semibold text-gray-900">프로필 편집</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-4 py-6 space-y-8">
        {/* 프로필 캐릭터 선택 */}
        <div>
          <h2 className="text-base font-medium text-gray-900 mb-4">프로필 캐릭터</h2>
          <div className="grid grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <button
                key={index}
                onClick={() => setSelectedCharacter(index)}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  selectedCharacter === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <Image
                  src={getCharacterImage(index)}
                  alt={`캐릭터 ${index}`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                {selectedCharacter === index && (
                  <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 닉네임 입력 */}
        <div>
          <h2 className="text-base font-medium text-gray-900 mb-3">닉네임</h2>
          <div className="relative">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="닉네임을 입력하세요"
              maxLength={10}
            />
            {nickname && (
              <button
                onClick={() => setNickname("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
              >
                <span className="text-gray-400 text-lg">×</span>
              </button>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            특수문자를 제외한 한글, 영어만 입력해주세요.({nickname.length}/10)
          </p>
        </div>

        {/* 목표 입력 */}
        <div>
          <h2 className="text-base font-medium text-gray-900 mb-3">나의 목표</h2>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="목표를 입력하세요"
          />
        </div>
      </div>

      {/* 저장 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          저장
        </button>
      </div>
    </div>
  );
}
