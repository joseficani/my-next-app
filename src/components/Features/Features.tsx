// import styles from "./Features.module.css";

// const cards = [
//     {
//         img: "/images/teamwork.jpg",
//         title: "Team Collaboration",
//         desc: "A team working together to turn ideas into innovative digital solutions.",
//     },
//     {
//         img: "/images/coding.jpg",
//         title: "Pure Development",
//         desc: "Building powerful and secure software through clean and efficient code.",
//     },
//     {
//         img: "/images/design.jpg",
//         title: "Modern UI",
//         desc: "We stay connected and ready to assist you whenever you need support.",
//     },
// ];

// export default function Features() {
//     return (
//         <section id="features" className={styles.section}>
//             <div className={styles.head}>
//                 <h2 className={styles.title}>Our Core Features</h2>
//                 <p className={styles.subtitle}>
//                     A clean and modern layout built with pure HTML and CSS.
//                 </p>
//             </div>

//             <div className={styles.grid}>
//                 {cards.map((c) => (
//                     <article className={styles.card} key={c.title}>
//                         <div className={styles.imageWrap}>
//                             <img className={styles.image} src={c.img} alt={c.title} />
//                         </div>

//                         <div className={styles.body}>
//                             <h3 className={styles.cardTitle}>{c.title}</h3>
//                             <p className={styles.cardDesc}>{c.desc}</p>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </section>
//     );
// }
const cards = [
  {
    img: "/images/teamwork.jpg",
    title: "Team Collaboration",
    desc: "A team working together to turn ideas into innovative digital solutions.",
  },
  {
    img: "/images/coding.jpg",
    title: "Pure Development",
    desc: "Building powerful and secure software through clean and efficient code.",
  },
  {
    img: "/images/design.jpg",
    title: "Modern UI",
    desc: "We stay connected and ready to assist you whenever you need support.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-4 py-8">
      <div className="mb-4">
        <h2 className="mb-1 text-lg font-extrabold text-white">
          Our Core Features
        </h2>
        <p className="text-sm text-white/65">
          A clean and modern layout built with pure HTML and CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="h-[170px] w-full overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3.5">
              <h3 className="mb-1 text-sm font-extrabold text-white">
                {c.title}
              </h3>
              <p className="text-[0.82rem] leading-relaxed text-white/70">
                {c.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
