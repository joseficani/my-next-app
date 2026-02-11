// import styles from "./Navbar.module.css";

// export default function Navbar() {
//   return (
//     <header className={styles.header}>
//       <nav className={styles.nav}>
//         <a className={styles.logo} href="/">
//           MySite
//         </a>

//         <ul className={styles.links}>
//           <li>
//             <a className={styles.link} href="#features">
//               Features
//             </a>
//           </li>
//           <li>
//             <a className={styles.link} href="#contact">
//               Contact
//             </a>
//           </li>
//         </ul>

//         <a className={styles.cta} href="#contact">
//           Get Started
//         </a>
//       </nav>
//     </header>
//   );
// }
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);
  const isActive = (path: string) => pathname === path;
  const linkClass = (path: string) =>
    [
      "cursor-pointer rounded-lg px-3 py-2 text-sm transition",
      "hover:bg-white/10 hover:text-mainText",
      isActive(path) ? "bg-white/10 text-mainText" : "text-mutedText",
    ].join(" ");
  const mobileLinkClass = (path: string) =>
    [
      "cursor-pointer text-2xl font-semibold transition",
      "hover:bg-white/10 hover:text-mainText rounded-xl px-4 py-2",
      isActive(path) ? "bg-white/10 text-mainText" : "text-mainText/90",
    ].join(" ");

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-softBorder bg-customBlue/90 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="text-lg font-extrabold tracking-tight text-mainText">
              MySite
            </a>
            <ul className="hidden items-center gap-6 md:flex">
              <li>
                <a href="/features" className={linkClass("/features")}>
                  Features
                </a>
              </li>
              <li>
                <a href="/contact" className={linkClass("/contact")}>
                  Contact
                </a>
              </li>
            </ul>

            <a
              href="/"
              className="hidden md:block rounded-xl bg-gradient-to-r from-primary to-primaryHover px-4 py-2 text-sm font-semibold text-mainText shadow-lg shadow-primary/30"
            >
              Get Started
            </a>

            <button
              type="button"
              className="md:hidden text-mainText"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-customBlue md:hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="text-lg font-extrabold tracking-tight text-mainText"
                onClick={closeMenu}
              >
                MySite
              </a>

              <button
                type="button"
                className="text-mainText text-2xl"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="flex h-[calc(100vh-72px)] items-center justify-center">
            <div className="flex flex-col items-center gap-6 text-center">
              <a href="/features" className={mobileLinkClass("/features")} onClick={closeMenu}>
                Features
              </a>

              <a href="/contact" className={mobileLinkClass("/contact")} onClick={closeMenu}>
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
