import type {
  ScreenTimeResponse,
  ScreenTimeWeekResponse,
} from "@/types/screentime";
import { privateApi } from "./instances";

// 스크린타임 생성/갱신 (하루 1회, 진입 시 호출)
export const createOrUpdateScreenTime = async (): Promise<{
  success: boolean;
  message: string;
  data?: ScreenTimeResponse["data"];
}> => {
  const { data } = await privateApi.post<{
    success: boolean;
    message: string;
    data?: ScreenTimeResponse["data"];
  }>("/api/screentime");
  return data;
};

// 일간 스크린타임 조회
export const getScreenTimeDay = async (
  date?: string
): Promise<ScreenTimeResponse> => {
  const today = date || new Date().toISOString().split("T")[0];
  try {
    const { data } = await privateApi.get<ScreenTimeResponse>(
      `/api/screentime?period=day&date=${today}`
    );

    // If screenTimes is empty or null, provide default values
    if (!data.data?.screenTimes?.[0]) {
      return {
        success: true,
        message: "No screen time data available",
        data: {
          screenTimes: [
            {
              date: today,
              totalMinutes: 0,
              appTimes: {
                instagram: 0,
                youtube: 0,
                kakaotalk: 0,
                chrome: 0,
              },
            },
          ],
        },
      };
    }

    return data;
  } catch (error) {
    console.error("Error fetching screen time:", error);
    // Return default data structure on error
    return {
      success: false,
      message: "Failed to fetch screen time data",
      data: {
        screenTimes: [
          {
            date: today,
            totalMinutes: 0,
            appTimes: {
              instagram: 0,
              youtube: 0,
              kakaotalk: 0,
              chrome: 0,
            },
          },
        ],
      },
    };
  }
};

// 주간 스크린타임 조회
export const getScreenTimeWeek = async (): Promise<ScreenTimeWeekResponse> => {
  const { data } = await privateApi.get<ScreenTimeWeekResponse>(
    "/api/screentime?period=week"
  );
  return data;
};
