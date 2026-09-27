import Link from "next/link";

// A link whose label rolls vertically on hover: the visible copy slides up and
// out while an accent copy slides in from below. The group is named so it does
// not also trigger the hover expanders the project rows hang off `group`.
export default function RollLink({
  href,
  external = false,
  label,
  className = "",
}) {
  const Tag = external ? "a" : Link;
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <Tag
      {...linkProps}
      className={`cursor-target group/link inline-flex items-center ${className}`}
    >
      {/* The clip box is this inner span, not the anchor, so the anchor is free
          to carry padding or a tap-target height without revealing both copies. */}
      <span className="relative block overflow-hidden leading-[1.5]">
        <span className="block transition-transform duration-300 ease-out group-hover/link:-translate-y-full">
          {label}
          {external && <span className="sr-only"> (opens in new tab)</span>}
        </span>
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 block translate-y-full text-[var(--accent)] transition-transform duration-300 ease-out group-hover/link:translate-y-0"
        >
          {label}
        </span>
      </span>
    </Tag>
  );
}
