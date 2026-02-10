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
    <header className="sticky top-0 z-50 border-b border-softBorder bg-customBlue/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="text-lg font-extrabold tracking-tight text-mainText">
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
          className="rounded-xl bg-gradient-to-r from-primary to-primaryHover px-4 py-2 text-sm font-semibold text-mainText shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
