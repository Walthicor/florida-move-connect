export function imageDimensions(src: string): { width: number; height: number } {
  if (src.includes("local-movers-in-miami-costs")) return { width: 520, height: 620 };
  if (src.includes("florida-moving-checklist")) return { width: 1131, height: 961 };
  if (src.includes("snowbird-moving")) return { width: 1024, height: 1024 };
  if (src.includes("hurricane-moving") || src.includes("interstate-move")) return { width: 1280, height: 720 };
  if (src.includes("professional-movers-vs-diy") || src.includes("moving-with-pets")) return { width: 1120, height: 630 };
  if (src.includes("moving-insurance")) return { width: 1600, height: 900 };
  if (src.includes("best-florida-neighborhoods")) return { width: 1200, height: 675 };
  return { width: 520, height: 620 };
}