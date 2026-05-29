export function getModuleProgress(
  slug: string
) {

  if (
    typeof window === "undefined"
  ) {
    return 0;
  }

  const progress =
    localStorage.getItem(
      `${slug}-progress`
    );

  return progress
    ? Number(progress)
    : 0;
}

export function saveModuleProgress(
  slug: string,
  progress: number
) {

  if (
    typeof window === "undefined"
  ) {
    return;
  }

  localStorage.setItem(
    `${slug}-progress`,
    progress.toString()
  );
}