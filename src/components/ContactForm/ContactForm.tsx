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
"use client";

import { useMemo, useState } from "react";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const errors: Errors = useMemo(() => {
    const e: Errors = {};

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name) e.name = "Please enter your name.";
    else if (name.length < 2) e.name = "Name must be at least 2 characters.";

    if (!email) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";

    if (!message) e.message = "Please write your message.";
    else if (message.length < 10) e.message = "Message must be at least 10 characters.";

    return e;
  }, [values]);

  const showError = (field: keyof Errors) => {
    return (submitted || touched[field as keyof typeof touched]) && !!errors[field];
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) return;

    console.log("Form submitted:", values);
    setValues({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-14">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="mb-6 max-w-2xl">
          <h2 className="text-2xl font-extrabold text-mainText">Contact</h2>
          <p className="text-mutedText">Send a message</p>
        </div>

        <div className="rounded-2xl border border-softBorder bg-customCard/60 p-6">
          <form className="grid gap-4" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-mutedText">Name</label>
                <input
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  className="mt-1 w-full rounded-xl border border-softBorder bg-customCard/60 px-4 py-3 text-mainText outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
                {showError("name") && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-mutedText">Email</label>
                <input
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  className="mt-1 w-full rounded-xl border border-softBorder bg-customCard/60 px-4 py-3 text-mainText outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="you@email.com"
                />
                {showError("email") && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm text-mutedText">Message</label>
              <textarea
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                rows={5}
                className="mt-1 w-full rounded-xl border border-softBorder bg-customCard/60 px-4 py-3 text-mainText outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                placeholder="Write your message..."
              />
              {showError("message") && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
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
