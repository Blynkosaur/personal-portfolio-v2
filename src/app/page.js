import Image from "next/image";
import { MapPin } from "lucide-react";
import FooterBar from "@/components/FooterBar";
import RollLink from "@/components/RollLink";
import yolandoLogo from "@/assets/yolando_logo.jpeg";
import himsHersLogo from "@/assets/hims__hers_logo.jpeg";

const LABEL_CLASS =
  "font-geist-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]";

// One row of the Experience / Selected projects lists. Only the name is a link,
// so hovering the row to expand it is not also hovering a link. Rows with a
// blurb expand it underneath on hover; focus-within does the same for keyboards.
function Row({ href, logo, alt, name, detail, meta, blurb }) {
  const external = href.startsWith("http");

  return (
    <div className="group/row border-t border-[var(--rule)] py-3.5 sm:py-3">
      <div
        className={`flex gap-3 ${
          logo ? "items-center" : "items-start sm:items-center"
        }`}
      >
        {logo && (
          <Image
            src={logo}
            alt={alt}
            width={22}
            height={22}
            className="h-[22px] w-[22px] shrink-0 rounded-[5px] object-cover"
          />
        )}
        <div className="flex min-w-0 flex-grow flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
          <h3 className="text-[15px] font-medium">
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="cursor-target transition-colors duration-150 hover:text-[var(--accent)]"
            >
              {name}
              {external && (
                <span className="sr-only"> (opens in new tab)</span>
              )}
            </a>
          </h3>
          <span className="text-sm text-[var(--muted)] sm:flex-grow sm:text-[15px]">
            {detail}
          </span>
        </div>
        {/* Rolls with the row, not on its own, so it reads as one affordance. */}
        <span className="relative block shrink-0 overflow-hidden font-geist-mono text-[11px] leading-[1.5] text-[var(--muted)] sm:text-xs">
          <span className="block transition-transform duration-300 ease-out group-hover/row:-translate-y-full">
            {meta}
          </span>
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 block translate-y-full text-[var(--accent)] transition-transform duration-300 ease-out group-hover/row:translate-y-0"
          >
            {meta}
          </span>
        </span>
      </div>
      {blurb && (
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-focus-within/row:grid-rows-[1fr] group-hover/row:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-2 text-sm leading-[1.6] text-[var(--text-2)]">
              {blurb}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[560px] flex-col gap-10 px-6 pb-10 pt-[72px] sm:gap-11 sm:px-4 sm:pt-[170px]">
      <header className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <h1 className="order-2 font-instrument-serif text-[44px] font-normal leading-none tracking-[-0.01em] sm:order-1 sm:text-5xl">
            Bryan <span className="text-[var(--accent)]">Lin</span>
          </h1>
          <span className="order-1 flex items-center gap-1.5 font-geist-mono text-xs text-[var(--muted)] sm:order-2 sm:text-[13px]">
            <MapPin size={14} strokeWidth={1.75} />
            Montreal, QC
          </span>
        </div>
        <p className="text-base leading-[1.6] text-[var(--text-2)]">
          Software engineer studying at{" "}
          <a
            href="https://uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target border-b border-[#3A3C4A] text-[var(--text)] transition-colors duration-150 hover:text-[var(--accent)]"
          >
            UWaterloo
          </a>
          . I build backend systems and AI infrastructure.
        </p>
      </header>

      <section className="flex flex-col gap-3 sm:gap-3.5">
        <h2 className={LABEL_CLASS}>Experience</h2>
        <div className="flex flex-col border-b border-[var(--rule)]">
          <Row
            href="https://yolando.com"
            logo={yolandoLogo}
            alt="Yolando logo"
            name="Yolando"
            detail="Software Engineer Intern"
            meta="2026"
            blurb="Backend services and AI infrastructure for brand search."
          />
          <Row
            href="https://joinlivewell.ca"
            logo={himsHersLogo}
            alt="Hims & Hers logo"
            name="Hims & Hers"
            detail="Software Engineer Intern"
            meta="2025"
            blurb="Product engineering on patient-facing features and data dashboards."
          />
        </div>
      </section>

      <section className="flex flex-col gap-3 sm:gap-3.5">
        <div className="flex items-baseline justify-between">
          <h2 className={LABEL_CLASS}>Selected projects</h2>
          <RollLink
            href="/projects"
            label="All projects →"
            className="text-[13px] text-[var(--text-2)]"
          />
        </div>
        <div className="flex flex-col border-b border-[var(--rule)]">
          <Row
            href="https://plume.hackmit.org/project/aajnp-oqnis-ttafi-kbgks"
            name="Rumi"
            detail="AI interior shopping agent"
            meta="HackMIT ’26 winner"
          />
          <Row
            href="https://github.com/blynkosaur/treehouse"
            name="Treehouse"
            detail="Git worktrees for parallel AI agents"
            meta="Go ↗"
          />
        </div>
      </section>

      <FooterBar />
    </main>
  );
}
