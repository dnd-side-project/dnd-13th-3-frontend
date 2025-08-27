export type GoalType =
  | "SLEEP_REGULARITY"
  | "FOCUS_IMPROVEMENT"
  | "HEALTH_CARE"
  | "NO_SCREEN"
  | "custom";

export function mapGoalPresetToEnum(label: string): GoalType {
  switch (label) {
    case "규칙적인 수면 습관을 만들고 싶어요":
      return "SLEEP_REGULARITY";
    case "집중력을 높이고 산만함을 줄이고 싶어요":
      return "FOCUS_IMPROVEMENT";
    case "눈 건강을 지키고 싶어요":
      return "HEALTH_CARE";
    case "혼자 있는 시간 디지털 없이 보내보기":
      return "NO_SCREEN";
    default:
      return "custom";
  }
}

export function mapGoalEnumToLabel(
  type?: string,
  custom?: string | null
): string | undefined {
  switch (type) {
    case "SLEEP_REGULARITY":
      return "규칙적인 수면 습관을 만들고 싶어요";
    case "FOCUS_IMPROVEMENT":
      return "집중력을 높이고 산만함을 줄이고 싶어요";
    case "HEALTH_CARE":
      return "눈 건강을 지키고 싶어요";
    case "NO_SCREEN":
      return "혼자 있는 시간 디지털 없이 보내보기";
    case "custom":
      return custom || "나만의 목표";
    default:
      return undefined;
  }
}

export function mapPresetHoursToEnum(hours: number): string {
  return `${hours}HOURS`;
}

export function formatScreenTimeCustom(hours: number, minutes: number): string {
  if (minutes === 0) return `${hours}HOURS`;
  const total = hours * 60 + minutes;
  return `${total}MINUTES`;
}

export function parseScreenTimeValue(
  val?: string | { type: string; custom: string | null }
): {
  hours: number;
  minutes: number;
} {
  if (!val) return { hours: 7, minutes: 0 };

  // Handle object format { type: string, custom: string | null }
  if (typeof val === "object" && val !== null) {
    if (val.type === "CUSTOM" && val.custom) {
      const total = parseInt(val.custom, 10);
      if (!isNaN(total)) {
        return { hours: Math.floor(total / 60), minutes: total % 60 };
      }
    } else if (/^\d+$/.test(val.type)) {
      const total = parseInt(val.type, 10);
      return { hours: Math.floor(total / 60), minutes: total % 60 };
    }
    return { hours: 7, minutes: 0 };
  }

  // Handle string format
  const upper = String(val).toUpperCase();
  if (upper.endsWith("HOURS")) {
    const n = parseInt(upper.replace("HOURS", "").trim());
    return { hours: Number.isNaN(n) ? 7 : n, minutes: 0 };
  }
  if (upper.endsWith("MINUTES")) {
    const m = parseInt(upper.replace("MINUTES", "").trim());
    const total = Number.isNaN(m) ? 420 : m; // default 7h
    return { hours: Math.floor(total / 60), minutes: total % 60 };
  }
  if (/^\d+$/.test(val)) {
    const total = parseInt(val, 10);
    return { hours: Math.floor(total / 60), minutes: total % 60 };
  }
  return { hours: 7, minutes: 0 };
}
