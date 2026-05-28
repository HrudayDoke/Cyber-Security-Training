export function unlockBadge(
  badge: string
) {

  const existingBadges =
    JSON.parse(
      localStorage.getItem("badges") || "[]"
    );

  const alreadyUnlocked =
    existingBadges.includes(badge);

  if (alreadyUnlocked) return;

  existingBadges.push(badge);

  localStorage.setItem(
    "badges",
    JSON.stringify(existingBadges)
  );
}

export function getUnlockedBadges() {

  if (typeof window === "undefined") {
    return [];
  }

  return JSON.parse(
    localStorage.getItem("badges") || "[]"
  );
}