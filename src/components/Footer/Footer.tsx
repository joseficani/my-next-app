import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {new Date().getFullYear()} Site</p>

        <div className={styles.social}>
          <a className={styles.iconBtn} href="#" aria-label="Facebook">
            <img
              className={styles.iconImg}
              src="/images/facebook.png"
              alt="Facebook"
            />
          </a>

          <a className={styles.iconBtn} href="#" aria-label="Instagram">
            <img
              className={styles.iconImg}
              src="/images/instagram.png"
              alt="Instagram"
            />
          </a>

          <a className={styles.iconBtn} href="#" aria-label="LinkedIn">
            <img
              className={styles.iconImg}
              src="/images/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
