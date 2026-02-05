// import styles from "./Hero.module.css";

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.overlay} />

//       <div className={styles.content}>
//         <p className={styles.badge}>Simple • Clean • Next.js</p>
//         <h1 className={styles.title}>Build a modern website layout</h1>
//         <p className={styles.subtitle}>
//           Menu, banner, cards, form, and footer — all split into components.
//         </p>


//         <div className={styles.actions}>
//           <a className={styles.primary} href="#contact">
//             Contact Us
//           </a>
//           <a className={styles.secondary} href="#features">
//             View Features
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Hero() {
  return (
    <section className="relative grid min-h-[320px] items-center overflow-hidden rounded-2xl border border-white/15 bg-[url('/images/home.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-2xl px-6 py-12 sm:px-10 sm:py-16">
        <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/75">
          Simple • Clean • Next.js
        </p>

        <h1 className="mb-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Build a modern website layout
        </h1>

        <p className="mb-6 max-w-xl text-base leading-relaxed text-white/75">
          Menu, banner, cards, form, and footer — all split into components.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/60 focus:ring-offset-2 focus:ring-offset-black"
          >
            Contact Us
          </a>

          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/25 focus:ring-offset-2 focus:ring-offset-black"
          >
            View Features
          </a>
        </div>
      </div>
    </section>
  );
}
