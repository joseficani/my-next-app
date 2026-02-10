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
    <section className="relative grid min-h-[320px] items-center overflow-hidden rounded-2xl border border-softBorder bg-[url('/images/home.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-2xl px-6 py-12 sm:px-10 sm:py-16">
        <p className="mb-4 inline-flex rounded-full border border-softBorder bg-customCard/60 px-3 py-2 text-sm text-mutedText">
          Simple • Clean • Next.js
        </p>

        <h1 className="mb-3 text-4xl font-extrabold leading-tight text-mainText sm:text-5xl">
          Build a modern website layout
        </h1>

        <p className="mb-6 max-w-xl text-base leading-relaxed text-mutedText">
          Menu, banner, cards, form, and footer — all split into components.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primaryHover px-5 py-3 text-sm font-semibold text-mainText shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Contact Us
          </a>

          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-softBorder bg-customCard/60 px-5 py-3 text-sm font-semibold text-mainText transition hover:bg-customCard focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            View Features
          </a>
        </div>
      </div>
    </section>
  );
}
