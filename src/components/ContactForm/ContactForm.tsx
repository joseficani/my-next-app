import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>Send a message </p>
      </div>

      <div className={styles.box}>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className={styles.input}
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className={styles.input}
                type="email"
                placeholder="you@email.com"
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Write your message..."
              required
              rows={5}
            />
          </div>

          <button className={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
