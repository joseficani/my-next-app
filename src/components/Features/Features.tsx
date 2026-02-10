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
// const cards = [
//   {
//     img: "/images/teamwork.jpg",
//     title: "Team Collaboration",
//     desc: "A team working together to turn ideas into innovative digital solutions.",
//   },
//   {
//     img: "/images/coding.jpg",
//     title: "Pure Development",
//     desc: "Building powerful and secure software through clean and efficient code.",
//   },
//   {
//     img: "/images/design.jpg",
//     title: "Modern UI",
//     desc: "We stay connected and ready to assist you whenever you need support.",
//   },
// ];
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
    <section id="features" className="py-12">
  <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-xl font-extrabold text-mainText">Our Core Features</h2>
          <p className="mt-1 text-sm text-mutedText">
            A clean and modern layout built with pure HTML and CSS.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl border border-softBorder bg-customCard/60"
            >
              <img src={c.img} alt={c.title} className="h-44 w-full object-cover" />

              <div className="p-4">
                <h3 className="text-sm font-extrabold text-mainText">{c.title}</h3>
                <p className="mt-1 text-sm text-mutedText">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
