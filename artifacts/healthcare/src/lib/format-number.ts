export function toSafeNumber(value: unknown, fallback = 0): number {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return fallback;
}

export function formatNumber(value: unknown, fallback = 0): string {
  return toSafeNumber(value, fallback).toLocaleString();
}

export function formatFixed(value: unknown, digits: number, fallback = 0): string {
  return toSafeNumber(value, fallback).toFixed(digits);
}
