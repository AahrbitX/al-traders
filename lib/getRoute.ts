const BASE_URL =
  process.env.NODE_ENV === "production" ? "https://altraders.in" : "";

const BRAND_URL = "https://bullsbrand.altraders.in";

const BRAND_FALLBACK = process.env.NODE_ENV === "production" ? "" : "/brand";

export function getRoute(path = ""): string {
  if (path.startsWith("http")) return path;
  return `${BASE_URL}${path}`;
}

export function getBrandRoute(path = BRAND_FALLBACK): string {
  if (path.startsWith("http")) return path;
  return `${BRAND_URL}${path}`;
}
