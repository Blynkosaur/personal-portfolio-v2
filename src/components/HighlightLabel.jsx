import { Highlighter } from "@/components/ui/highlighter";
import { INK, ACCENT } from "@/lib/ui";

// A text label that swaps to an animated underline-highlighted accent version
// when `hovered`. Used inside the CTA buttons.
export default function HighlightLabel({
  hovered,
  children,
  animationDuration = 50,
}) {
  if (hovered) {
    return (
      <Highlighter
        action="underline"
        iterations={1}
        padding={0}
        animationDuration={animationDuration}
        color={INK}
      >
        <span style={{ fontWeight: "bold", color: ACCENT }}>{children}</span>
      </Highlighter>
    );
  }

  return <span style={{ color: INK }}>{children}</span>;
}
