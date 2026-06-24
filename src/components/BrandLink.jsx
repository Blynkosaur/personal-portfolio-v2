import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";
import { INK, ACCENT } from "@/lib/ui";

// An external link rendered as a small logo + italic label, used in the intro
// list (UWaterloo, Yolando, Hims & Hers). When `hovered` the label turns accent
// and gets an animated underline. All the per-brand spacing/styling is passed in
// so the three call sites collapse to one component.
export default function BrandLink({
  href,
  src,
  alt,
  label,
  hovered,
  imageWidth = 16,
  imageHeight = 16,
  imageClassName = "object-contain rounded-[2px] relative top-[1px]",
  gap = "6px",
  anchorClassName = "hover:font-bold hover:text-[#c4a3ec] transition-colors duration-200 inline-flex items-center",
  anchorStyle = { minHeight: "1.5rem" },
}) {
  const content = (color) => (
    <span
      className="italic"
      style={{
        display: "flex",
        flexDirection: "row",
        gap,
        fontWeight: "bold",
        color,
        alignItems: "center",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        className={imageClassName}
      />
      {label}
    </span>
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={anchorClassName}
      style={anchorStyle}
    >
      {hovered ? (
        <Highlighter action="underline" color={INK}>
          {content(ACCENT)}
        </Highlighter>
      ) : (
        content(INK)
      )}
    </a>
  );
}
