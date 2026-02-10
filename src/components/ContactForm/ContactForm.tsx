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
    <section id="contact" className="py-5">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-mainText">Contact</h2>
          <p className="text-mutedText">Send a message</p>
        </div>

        <div className="rounded-2xl border border-softBorder bg-customCard/60 p-6">
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-mutedText">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-softBorder bg-customCard/60 px-4 py-3 text-mainText outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-mutedText">Email</label>
                <input
                  className="mt-1 w-full rounded-xl border border-softBorder bg-customCard/60 px-4 py-3 text-mainText outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-mutedText">Message</label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-xl border border-softBorder bg-customCard/60 px-4 py-3 text-mainText outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-primary to-primaryHover px-6 py-3 font-bold text-mainText shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
