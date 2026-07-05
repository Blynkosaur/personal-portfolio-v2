import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  hook,
  tags,
  github,
  link,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="cursor-target flex w-full items-center gap-3 rounded-[7px] px-3 py-[11px] transition-colors duration-150 hover:bg-slate-700/[0.28]"
      >
        <span
          className="shrink-0 text-[11px] leading-none"
          style={{
            color: open ? "#c4a3ec" : "#6b7280",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "color 0.2s, transform 0.2s",
          }}
        >
          ▸
        </span>
        <h3
          className="!font-redaction-35 whitespace-nowrap text-lg italic transition-colors duration-200"
          style={{
            color: open ? "#c4a3ec" : "#CCD6F5",
            fontWeight: 400,
          }}
        >
          {title}
        </h3>
        <span className="flex-1" />
        {!open && (
          <span className="whitespace-nowrap text-xs font-normal text-slate-500">
            {tags.slice(0, 2).join(" · ")}
          </span>
        )}
      </button>

      <div
        className="grid"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease",
        }}
      >
        <div className="overflow-hidden">
          <div
            className="mb-3 ml-[30px] mr-2 mt-3 rounded-lg border border-[#6b7280] bg-slate-700/[0.28] px-5 py-[18px] backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-[#8b7bb0] hover:bg-slate-700/40"
          >
            <p className="mb-4 text-justify text-sm leading-[1.65] text-[#CCD6F5]">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
            <p className="mb-4 text-sm leading-[1.65] text-[#CCD6F5]">
              <b>{hook}</b>
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded bg-slate-700/50 px-2 py-1 text-xs text-[#E8F4F8]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center gap-1.5 rounded-md border border-slate-500 bg-slate-700/50 px-4 py-[9px] text-xs font-bold text-slate-100 transition-all duration-200 hover:translate-x-1 hover:border-slate-400 hover:bg-slate-600/50 hover:text-[#c4a3ec]"
              >
                <FaGithub style={{ color: "#c4a3ec" }} />
                Code
              </a>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target inline-flex items-center rounded-md border border-slate-500 bg-slate-700/50 px-4 py-[9px] text-xs font-bold text-slate-100 transition-all duration-200 hover:translate-x-1 hover:border-slate-400 hover:bg-slate-600/50 hover:text-[#c4a3ec]"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
