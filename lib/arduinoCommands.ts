/**
 * Commands must match what your Arduino sketch parses (same as OpenProcessing).
 * /portfolio has no line in the original mock — we do not send a command there.
 */
export type ArduinoCommand =
  | "HOME"
  | "PROJECTS"
  | "RESUME"
  | "PUBLICATIONS"
  | "ABOUT"
  | "CONTACT";

/**
 * @param basePath - Same as Next.js `basePath` when hosted on GitHub Pages project sites
 *   (e.g. `/my-repo` for `https://user.github.io/my-repo/`). Empty for root deploys.
 */
export function pathnameToCommand(
  pathname: string,
  basePath = ""
): ArduinoCommand | null {
  let p = pathname;
  const bp = basePath.replace(/\/$/, "");
  if (bp && (p === bp || p.startsWith(`${bp}/`))) {
    p = p.slice(bp.length) || "/";
  }
  p = p.endsWith("/") && p.length > 1 ? p.slice(0, -1) : p;
  if (p === "/" || p === "") return "HOME";
  if (p === "/projects") return "PROJECTS";
  if (p === "/publications") return "PUBLICATIONS";
  if (p === "/about") return "ABOUT";
  if (p === "/contact") return "CONTACT";
  return null;
}
