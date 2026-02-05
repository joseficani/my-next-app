import styles from "./Features.module.css";

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
        <section id="features" className={styles.section}>
            <div className={styles.head}>
                <h2 className={styles.title}>Our Core Features</h2>
                <p className={styles.subtitle}>
                    A clean and modern layout built with pure HTML and CSS.
                </p>
            </div>

            <div className={styles.grid}>
                {cards.map((c) => (
                    <article className={styles.card} key={c.title}>
                        <div className={styles.imageWrap}>
                            <img className={styles.image} src={c.img} alt={c.title} />
                        </div>

                        <div className={styles.body}>
                            <h3 className={styles.cardTitle}>{c.title}</h3>
                            <p className={styles.cardDesc}>{c.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
