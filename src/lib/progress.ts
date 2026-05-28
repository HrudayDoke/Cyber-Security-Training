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
