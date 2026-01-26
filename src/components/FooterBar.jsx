"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPaperclip,
  FaCode,
} from "react-icons/fa";
import DotGrid from "@/components/DotGrid";
import styles from "./FooterBar.module.css";

const FooterBar = ({ links = [], className = "" }) => {
  const defaultLinks = [
    {
      name: "github",
      href: "https://github.com/blynkosaur",
      icon: FaGithub,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/bry4n-lin",
      icon: FaLinkedin,
    },
    {
      name: "email",
      href: "mailto:b86lin@uwaterloo.ca",
      icon: FaEnvelope,
    },
    {
      name: "resume",
      href: "./BryanLin_Resume.pdf",
      icon: FaPaperclip,
    },
    {
      name: "repo",
      href: "https://github.com/blynkosaur/personal-portfolio-v2",
      icon: FaCode,
    },
  ];

  const linkItems = links.length > 0 ? links : defaultLinks;

  return (
    <footer className={`${styles.footerBar} ${className}`}>
      <div className={styles.dotGridContainer}>
        <DotGrid
          dotSize={2}
          gap={12}
          baseColor="#4a5568"
          activeColor="#ffffff"
          style={{ opacity: 0.4 }}
        />
      </div>
      <hr className={styles.divider} />
      <div className={styles.footerContent}>
        <div className={styles.linksContainer}>
          {linkItems.map((link, index) => {
            const LinkComponent = link.href?.startsWith("mailto:") || link.href?.startsWith("http") ? "a" : Link;
            const linkProps = link.href?.startsWith("mailto:") || link.href?.startsWith("http")
              ? {
                  href: link.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : { href: link.href };

            return (
              <LinkComponent
                key={index}
                {...linkProps}
                className={styles.link}
              >
                {link.icon && (
                  <>
                    <link.icon className={styles.icon} />
                    <span className={styles.label}>
                      {link.name}
                    </span>
                  </>
                )}
                {!link.icon && <span>{link.name}</span>}
              </LinkComponent>
            );
          })}
        </div>
        <div className={styles.navContainer}>
          <a href="#" className={styles.navLink}>
            ←
          </a>
          <div className={styles.navIcon} />
          <a href="#" className={styles.navLink}>
            →
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        {new Date().getFullYear()} &copy; Bryan Lin
      </p>
    </footer>
  );
};

export default FooterBar;
