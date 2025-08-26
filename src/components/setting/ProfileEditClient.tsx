"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { UserProfileResponse } from "@/types/auth";
import { updateUserProfile } from "@/lib/api/user";

interface ProfileEditClientProps {
  user: UserProfileResponse | null;
}

export function ProfileEditClient({ user }: ProfileEditClientProps) {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState(
    user?.characterIndex || 1
  );
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [goal, setGoal] = useState(
    user?.goal?.custom ||
      user?.goal?.type ||
      "혼자 있는 시간 디지털 없이 보내기"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleSave = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const isGoalChanged = goal !== (user?.goal?.custom || user?.goal?.type);
      const profileData = {
        goal: {
          type: isGoalChanged ? "CUSTOM" : (user?.goal?.type || "NO_SCREEN") as "FOCUS_IMPROVEMENT" | "SLEEP_REGULARITY" | "HEALTH_CARE" | "NO_SCREEN" | "CUSTOM",
          custom: isGoalChanged ? goal : user?.goal?.custom || undefined,
        },
        nickname,
        characterIndex: selectedCharacter,
      };
      const response = await updateUserProfile(profileData);
      console.log("프로필 저장 성공:", response);
      setShowSuccessToast(true);
      setTimeout(() => {
        router.back();
      }, 1000);
    } catch (error) {
      console.error("프로필 저장 실패:", error);
      alert("프로필 저장에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const getCharacterImage = (characterIndex: number) => {
    return `/images/logos/Charater${characterIndex}.svg`;
  };

  const getCharacterColors = (characterIndex: number) => {
    const colors = {
      1: { border: "border-primary", bg: "bg-primary" },
      2: { border: "border-green-500", bg: "bg-green-500" },
      3: { border: "border-yellow-500", bg: "bg-yellow-500" },
      4: { border: "border-purple-500", bg: "bg-purple-500" },
      5: { border: "border-pink-500", bg: "bg-pink-500" },
      6: { border: "border-orange-500", bg: "bg-orange-500" },
    };
    return colors[characterIndex as keyof typeof colors] || colors[1];
  };

  if (!user) {
    return null;
  }

  return (
    <div className='h-[100dvh] bg-gray-50'>
      <div className='flex flex-col h-full justify-between'>
        <div className='flex-1'>
          <div className='relative px-4 py-6 flex items-center'>
            <button type='button' onClick={handleBack}>
              <Image
                src='/images/logos/SettingBack.svg'
                alt='뒤로가기'
                width={12}
                height={22}
              />
            </button>
            <h1 className='absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-900'>
              프로필 편집
            </h1>
          </div>
          <div className='px-4 py-6 space-y-8'>
            <div>
              <h2 className='text-base font-medium text-gray-900 mb-4'>
                프로필 캐릭터
              </h2>
              <div className='grid grid-cols-6 gap-3 items-center'>
                {[1, 2, 3, 4, 5, 6].map((index) => {
                  const colors = getCharacterColors(index);
                  const isSelected = selectedCharacter === index;

                  return (
                    <button
                      type='button'
                      key={index}
                      onClick={() => setSelectedCharacter(index)}
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isSelected ? `${colors.border} border-2` : ""
                      }`}
                    >
                      <Image
                        src={getCharacterImage(index)}
                        alt={`캐릭터 ${index}`}
                        width={48}
                        height={48}
                        className='rounded-full object-cover'
                      />
                      {isSelected && (
                        <div
                          className={`absolute -top-1 -right-1 w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center z-10`}
                        >
                          <Image
                            src='/images/logos/Check.svg'
                            alt='선택됨'
                            width={16}
                            height={16}
                            className='w-4 h-4'
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className='text-base font-medium text-gray-900 mb-3'>
                닉네임
              </h2>
              <div className='relative'>
                <input
                  type='text'
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className='w-full px-4 py-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-600 text-base font-medium leading-normal tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:outline-transparent'
                  placeholder='닉네임을 입력하세요'
                  maxLength={10}
                />
                {nickname && (
                  <button
                    type='button'
                    onClick={() => setNickname("")}
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 p-1'
                  >
                    <Image
                      src='/images/logos/DeleteBtn.svg'
                      alt='삭제'
                      width={20}
                      height={20}
                    />
                  </button>
                )}
              </div>
              <p className='text-sm text-gray-600 mt-2'>
                특수문자를 제외한 한글, 영어만 입력해주세요.({nickname.length}
                /10)
              </p>
            </div>
            <div>
              <h2 className='text-base font-medium text-gray-900 mb-3'>
                나의 목표
              </h2>
              <input
                type='text'
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className='w-full px-4 py-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 text-gray-600 text-base font-medium leading-normal tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:outline-transparent'
                placeholder='목표를 입력하세요'
              />
            </div>
          </div>
        </div>
        <div className='p-4'>
          <button
            type='button'
            onClick={handleSave}
            disabled={isLoading}
            className='w-full transition-colors btn-main btn-primary disabled:opacity-50 disabled:cursor-not-allowed'
          >
            저장
          </button>
        </div>
      </div>
      {showSuccessToast && (
        <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50'>
          <div className='w-80 py-3 bg-neutral-900/90 rounded-lg inline-flex justify-center items-center gap-1.5'>
            <Image
              src='/images/logos/Check.svg'
              alt='Check'
              width={24}
              height={24}
            />
            <div className='text-white text-sm font-medium'>
              프로필을 수정했습니다.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
