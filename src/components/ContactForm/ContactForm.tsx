// import styles from "./ContactForm.module.css";

// export default function ContactForm() {
//   return (
//     <section id="contact" className={styles.section}>
//       <div className={styles.head}>
//         <h2 className={styles.title}>Contact</h2>
//         <p className={styles.subtitle}>Send a message </p>
//       </div>

//       <div className={styles.box}>
//         <form className={styles.form}>
//           <div className={styles.row}>
//             <div className={styles.field}>
//               <label className={styles.label} htmlFor="name">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 className={styles.input}
//                 type="text"
//                 placeholder="Your name"
//                 required
//               />
//             </div>

//             <div className={styles.field}>
//               <label className={styles.label} htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 className={styles.input}
//                 type="email"
//                 placeholder="you@email.com"
//                 required
//               />
//             </div>
//           </div>

//           <div className={styles.field}>
//             <label className={styles.label} htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               className={styles.textarea}
//               placeholder="Write your message..."
//               required
//               rows={5}
//             />
//           </div>

//           <button className={styles.button} type="submit">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
export default function ContactForm() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-4 py-14">
      <div className="mb-6 text-left">
        <h2 className="mb-1 text-2xl font-extrabold text-white">Contact</h2>
        <p className="text-white/70">Send a message</p>
      </div>

      <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6">
        <form className="grid w-full gap-5">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-white/70">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500/60"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/70">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500/60"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/70">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500/60"
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-[1px] hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
