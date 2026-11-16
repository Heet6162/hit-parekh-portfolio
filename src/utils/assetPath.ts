export function getAssetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  // 1. Build-time environment variable
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // 2. Runtime fallback: detect GitHub Pages repository subpath from location
  if (!basePath && typeof window !== "undefined") {
    const pathname = window.location.pathname;
    if (pathname.startsWith("/hit-parekh-portfolio")) {
      basePath = "/hit-parekh-portfolio";
    }
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (basePath && !cleanPath.startsWith(basePath)) {
    return `${basePath}${cleanPath}`;
  }
  return cleanPath;
}
