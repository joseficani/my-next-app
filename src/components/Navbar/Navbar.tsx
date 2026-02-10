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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-softBorder bg-customBlue/90 backdrop-blur">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-lg font-extrabold tracking-tight text-mainText"
            >
              MySite
            </a>
            <ul className="hidden items-center gap-6 md:flex">
              <li>
                <a
                  href="#features"
                  className="rounded-lg px-3 py-2 text-sm text-mutedText transition hover:bg-customCard hover:text-mainText"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="rounded-lg px-3 py-2 text-sm text-mutedText transition hover:bg-customCard hover:text-mainText"
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="hidden md:block rounded-xl bg-gradient-to-r from-primary to-primaryHover px-4 py-2 text-sm font-semibold text-mainText shadow-lg shadow-primary/30"
            >
              Get Started
            </a>
            <button
              className="md:hidden text-mainText"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-customBlue md:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <a
              href="/"
              className="text-lg font-extrabold text-mainText"
              onClick={() => setOpen(false)}
            >
              MySite
            </a>
            <button
              className="text-mainText text-2xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="flex h-[80%] items-center justify-center">
            <div className="flex flex-col items-center gap-8 text-center">
              <a
                href="#features"
                className="text-2xl font-semibold text-mainText"
                onClick={() => setOpen(false)}
              >
                Features
              </a>
              <a
                href="#contact"
                className="text-2xl font-semibold text-mainText"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
