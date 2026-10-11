import type { HeadingSegment } from "@/lib/landing/types";

const styleClasses: Record<NonNullable<HeadingSegment["style"]>, string> = {
  default: "",
  light: "font-light",
  bold: "font-bold",
  italic: "italic",
  editorial: "font-editorial font-light",
  editorialItalic: "font-editorial font-light italic",
  pink: "text-text-pink",
  pinkItalic: "font-bold italic text-[#D82099]",
};

export default function StyledHeading({ segments }: { segments: HeadingSegment[] }) {
  return segments.map((segment, index) => (
    <span key={`${segment.text}-${index}`}>
      {segment.breakBefore ? <br /> : null}
      <span className={styleClasses[segment.style ?? "default"]}>{segment.text}</span>
    </span>
  ));
}
