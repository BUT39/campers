"use client";

import Link from "next/link";
import css from "./Header.module.css";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Link href="/" className={css.logoLink}>
        <Logo />
      </Link>
      <nav className={css.nav}>
        <Link
          href="/"
          className={`${css.link} ${pathname === "/" ? css.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className={`${css.link} ${
            pathname.startsWith("/catalog") ? css.active : ""
          }`}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
}
