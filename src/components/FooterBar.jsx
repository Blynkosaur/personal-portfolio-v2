"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, Code } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./FooterBar.module.css";
import seWebring from "@/assets/se-webring.svg";

const FooterBar = ({ links = [], className = "" }) => {
  const defaultLinks = [
    {
      name: "github",
      href: "https://github.com/blynkosaur",
      icon: Github,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/bry4n-lin",
      icon: Linkedin,
    },
    {
      name: "x",
      href: "https://x.com/bry4n_lin",
      icon: FaXTwitter,
    },
    {
      name: "email",
      href: "mailto:b86lin@uwaterloo.ca",
      icon: Mail,
    },
    {
      name: "resume",
      href: "./BryanLin_Resume.pdf",
      icon: FileText,
    },
    {
      name: "repo",
      href: "https://github.com/blynkosaur/personal-portfolio-v2",
      icon: Code,
    },
  ];

  const linkItems = links.length > 0 ? links : defaultLinks;

  return (
    <footer className={`${styles.footerBar} ${className}`}>
      <p className={styles.socialsText}>Here are my socials:</p>
      <hr className={styles.divider} />
      <div className={styles.footerContent}>
        <div className={styles.linksContainer}>
          {linkItems.map((link, index) => {
            const LinkComponent =
              link.href?.startsWith("mailto:") || link.href?.startsWith("http")
                ? "a"
                : Link;
            const linkProps =
              link.href?.startsWith("mailto:") || link.href?.startsWith("http")
                ? {
                    href: link.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { href: link.href };

            return (
              <LinkComponent key={index} {...linkProps} className={styles.link}>
                {link.icon && (
                  <>
                    <link.icon className={styles.icon} />
                    <span className={styles.label}>{link.name}</span>
                  </>
                )}
                {!link.icon && <span>{link.name}</span>}
              </LinkComponent>
            );
          })}
        </div>
        <div className={styles.navContainer}>
          <a
            href="https://se-webring.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <img
              src={seWebring.src}
              alt="Webring"
              className={styles.navIcon}
            />
            <span className={styles.label}>webring</span>
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        {new Date().getFullYear()}
        <span className={styles.copyrightSymbol}>©</span> Bryan Lin
      </p>
    </footer>
  );
};

export default FooterBar;
