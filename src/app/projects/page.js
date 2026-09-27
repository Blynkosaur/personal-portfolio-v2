import projects from "./projects.json";
import FooterBar from "@/components/FooterBar";
import RollLink from "@/components/RollLink";

const LABEL_CLASS =
  "font-geist-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" };

function NewTab() {
  return <span className="sr-only"> (opens in new tab)</span>;
}

// Code / Demo / Plume, skipping the ones a project doesn't have.
function ProjectLinks({ github, link, plume }) {
  const items = [
    { href: github, label: "Code ↗" },
    { href: link, label: "Demo ↗" },
    { href: plume, label: "Plume ↗" },
  ].filter((item) => item.href);

  return (
    <div className="flex shrink-0 gap-4 text-[13px] text-[var(--text-2)]">
      {items.map(({ href, label }) => (
        <RollLink key={label} href={href} label={label} external />
      ))}
    </div>
  );
}

// Featured block: several links, so the name is its own link rather than
// wrapping the whole block (no nested anchors).
function FeaturedProject({ project }) {
  const primary = project.link || project.plume || project.github;

  return (
    <div className="group border-t border-[var(--rule)] py-5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-medium">
          <a
            href={primary}
            {...EXTERNAL}
            className="cursor-target transition-colors duration-150 hover:text-[var(--accent)]"
          >
            {project.title}
            <NewTab />
          </a>
        </h3>
        <span className="shrink-0 font-geist-mono text-xs text-[var(--muted)]">
          {project.tag}
        </span>
      </div>
      <p className="mt-2 text-[15px] leading-[1.55] text-[var(--text-2)]">
        {project.blurb}
      </p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="font-geist-mono text-xs text-[var(--muted)]">
          {project.tags.join(" · ")}
        </div>
        <ProjectLinks {...project} />
      </div>
      {/* Same hover expander as the compact rows, under everything else. */}
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p
            className="pt-3 text-sm leading-[1.6] text-[var(--text-2)]"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
      </div>
    </div>
  );
}

// Compact row: the title is plain text. Hovering expands the description and
// the links underneath, using the 0fr -> 1fr grid trick so the height animates
// without measuring anything in JS. focus-within does the same for keyboards,
// so the links are reachable by tabbing rather than hidden behind a hover.
function CompactProject({ project }) {
  return (
    <div className="group border-t border-[var(--rule)] py-3">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
        <div className="flex items-baseline justify-between gap-3 sm:contents">
          <h3 className="text-[15px] font-medium sm:order-1">
            <a
              href={project.link || project.github || project.plume}
              {...EXTERNAL}
              className="cursor-target transition-colors duration-150 hover:text-[var(--accent)]"
            >
              {project.title}
              <NewTab />
            </a>
          </h3>
          <span className="shrink-0 font-geist-mono text-xs text-[var(--muted)] sm:order-3">
            {project.year}
          </span>
        </div>
        <span className="min-w-0 text-[15px] text-[var(--muted)] sm:order-2 sm:flex-grow">
          {project.blurb}
        </span>
      </div>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-focus-within:grid-rows-[1fr] group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p
            className="pt-2 text-sm leading-[1.6] text-[var(--text-2)]"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <div className="flex justify-end pt-2.5">
            <ProjectLinks {...project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <main className="mx-auto flex w-full max-w-[640px] flex-col px-6 pb-10 pt-14 sm:px-4 sm:pt-[120px]">
      <RollLink
        href="/"
        label={
          <>
            {/* Sans arrow: the mono face draws a much longer glyph than the
                "All projects →" arrow on the homepage. */}
            <span className="font-geist">←</span> Bryan Lin
          </>
        }
        className="h-11 self-start font-geist-mono text-[13px] text-[var(--muted)]"
      />

      <h1 className="mt-4 font-instrument-serif text-[40px] font-normal leading-none tracking-[-0.01em] sm:text-5xl">
        Projects
      </h1>
      <p className="mt-3 text-base leading-[1.6] text-[var(--text-2)]">
        Things I&apos;ve built — hackathon wins, tools I use daily, and
        experiments.
      </p>

      <section className="mt-14 flex flex-col gap-3.5">
        <h2 className={LABEL_CLASS}>Featured</h2>
        <div className="flex flex-col border-b border-[var(--rule)]">
          {featured.map((project) => (
            <FeaturedProject key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-12 flex flex-col gap-3.5">
        <h2 className={LABEL_CLASS}>All projects</h2>
        <div className="flex flex-col border-b border-[var(--rule)]">
          {rest.map((project) => (
            <CompactProject key={project.title} project={project} />
          ))}
        </div>
      </section>

      <div className="mt-20">
        <FooterBar />
      </div>
    </main>
  );
}
