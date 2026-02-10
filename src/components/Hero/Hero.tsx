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
// src/components/Hero/Hero.tsx
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-y border-softBorder bg-[url('/images/home.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative container mx-auto px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-softBorder bg-customCard/60 px-3 py-2 text-sm text-mutedText backdrop-blur">
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
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primaryHover px-5 py-3 text-sm font-semibold text-mainText shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Contact Us
            </a>

            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-xl border border-softBorder bg-customCard/60 px-5 py-3 text-sm font-semibold text-mainText backdrop-blur transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              View Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
