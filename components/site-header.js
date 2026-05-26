"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/problem", label: "Problem" },
  { href: "/solution", label: "Solution" },
  { href: "/progress", label: "Progress" },
  { href: "/team", label: "Team" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <div className="brand-group">
        <Link className="brand" href="/">
          ECE 196
        </Link>
        <div className="topbar-logos">
          <img
            src="/SolutionPhotos/UCSDJacobsLogo.png"
            alt="UC San Diego Jacobs School of Engineering logo"
          />
          <img
            src="/SolutionPhotos/logo.png"
            alt="Project logo for the ECE196 smart parking system"
          />
        </div>
      </div>
      <nav className="nav">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "active" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
