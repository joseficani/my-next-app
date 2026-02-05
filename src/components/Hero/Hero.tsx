import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.badge}>Simple • Clean • Next.js</p>
        <h1 className={styles.title}>Build a modern website layout</h1>
        <p className={styles.subtitle}>
          Menu, banner, cards, form, and footer — all split into components.
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href="#contact">
            Contact Us
          </a>
          <a className={styles.secondary} href="#features">
            View Features
          </a>
        </div>
      </div>
    </section>
  );
}
