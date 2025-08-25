import type {
  CreateChallengeRequest,
  CreateChallengeResponse,
  GetChallengeResponse,
  InviteUrlResponse,
} from "@/lib/challenge";

import { API_BASE_URL } from "@/lib/config";
import { privateApi } from "@/lib/api/instances";

export async function createChallenge(
  data: CreateChallengeRequest
): Promise<CreateChallengeResponse> {
  console.log("🔍 챌린지 생성 API 호출 시작:", {
    data: data
  });

  try {
    const { data: responseData } = await privateApi.post<CreateChallengeResponse>(
      "/api/challenge",
      data
    );

    console.log("✅ 챌린지 생성 API 성공:", {
      data: responseData,
      challengeId: responseData.challenge_id,
      message: responseData.message
    });

    return responseData;
  } catch (error) {
    console.error("❌ 챌린지 생성 API 호출 실패:", error);
    throw error;
  }
}

export async function getChallenge(): Promise<GetChallengeResponse> {
  try {
    const { data } = await privateApi.get<GetChallengeResponse>("/api/challenge");
    
    console.log("✅ 챌린지 API 응답 성공:", {
      data: data,
      hasData: !!data.data,
      dataKeys: data.data ? Object.keys(data.data) : null,
      challengesArray: data.data?.challenges,
      challengesLength: data.data?.challenges?.length || 0
    });

    return data;
  } catch (error) {
    console.error("❌ 챌린지 조회 API 호출 실패:", error);
    throw error;
  }
}

export async function generateInviteUrl(
  accessToken: string
): Promise<InviteUrlResponse> {
  const response = await fetch(`${API_BASE_URL}/api/challenge/inviteUrl`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("초대 링크 생성에 실패했습니다.");
  }

  return response.json();
}

