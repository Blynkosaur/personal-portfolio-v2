import { Code, Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import seWebring from "@/assets/se-webring.svg";

const SOCIALS = [
  {
    href: "https://github.com/blynkosaur",
    label: "GitHub",
    name: "github",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/bry4n-lin",
    label: "LinkedIn",
    name: "linkedin",
    icon: Linkedin,
  },
  {
    href: "https://x.com/bry4n_lin",
    label: "X",
    name: "x",
    icon: FaXTwitter,
  },
  {
    href: "mailto:b86lin@uwaterloo.ca",
    label: "Email",
    name: "email",
    icon: Mail,
  },
  {
    href: "https://github.com/blynkosaur/personal-portfolio-v2",
    label: "Site source code",
    name: "repo",
    icon: Code,
  },
];

const FooterBar = ({ className = "" }) => (
  <footer className={`flex w-full flex-col gap-4 ${className}`}>
    {/* The bar sits above the logos, as it did in the original footer. */}
    <hr className="m-0 border-0 border-t border-[var(--rule)]" />
    <div className="flex items-center justify-between gap-4">
      <div className="-ml-3 flex items-center sm:-ml-2.5">
      {SOCIALS.map(({ href, label, name, icon: Icon }) => {
        const external = href.startsWith("http");
        return (
          <a
            key={name}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="cursor-target group flex h-11 min-w-11 items-center justify-center text-[var(--text-2)] transition-colors duration-150 hover:text-[var(--accent)] sm:h-10 sm:min-w-10"
          >
            <Icon
              size={18}
              strokeWidth={1.6}
              className="shrink-0 transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Name slides out of the icon on hover, as the old footer did. */}
            <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-geist-mono text-[13px] opacity-0 transition-all duration-500 ease-out group-hover:ml-2 group-hover:max-w-[200px] group-hover:opacity-100 md:inline-block">
              {name}
            </span>
          </a>
        );
      })}
      </div>
      <a
        href="https://se-webring.xyz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="SE Webring"
        className="cursor-target group flex shrink-0 items-center font-geist-mono text-xs text-[var(--text-2)] transition-colors duration-150 hover:text-[var(--accent)]"
      >
        {/* Masked rather than an <img> so the mark takes currentColor and
            matches the icons beside it, in both rest and hover states. */}
        <span
          aria-hidden="true"
          className="h-7 w-7 shrink-0 bg-current transition-transform duration-500 ease-out group-hover:scale-110"
          style={{
            WebkitMaskImage: `url('${seWebring.src}')`,
            maskImage: `url('${seWebring.src}')`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 ease-out group-hover:ml-2 group-hover:max-w-[200px] group-hover:opacity-100 md:inline-block">
          webring
        </span>
      </a>
    </div>
    <div className="font-geist-mono text-xs text-[var(--muted)]">
      © {new Date().getFullYear()} Bryan Lin
    </div>
  </footer>
);

export default FooterBar;
