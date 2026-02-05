import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.logo} href="/">
          MySite
        </a>

        <ul className={styles.links}>
          <li>
            <a className={styles.link} href="#features">
              Features
            </a>
          </li>
          <li>
            <a className={styles.link} href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <a className={styles.cta} href="#contact">
          Get Started
        </a>
      </nav>
    </header>
  );
}
