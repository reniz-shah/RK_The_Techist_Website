export const getImgPath = (path: string): string => {
  const basePath = import.meta.env.VITE_BASE_URL || "";

  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};