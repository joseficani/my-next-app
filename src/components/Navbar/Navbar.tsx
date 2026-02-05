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
export default function Navbar() {
  return (
    <header className="sticky top-0 z-[999] border-b border-white/10 bg-[#0b1220]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="text-lg font-extrabold tracking-tight text-white">
          MySite
        </a>

        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <a
              href="#features"
              className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
