// import styles from "./page.module.css";
// import Navbar from "@/components/Navbar/Navbar";
// import Hero from "@/components/Hero/Hero";
// import Features from "@/components/Features/Features";
// import ContactForm from "@/components/ContactForm/ContactForm";
// import Footer from "@/components/Footer/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <main className={styles.main}>
//         <Hero />
//         <Features />
//         <ContactForm />
//       </main>

//       <Footer />
//     </>
//   );
// }
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageBanner from "@/components/PageBanner/PageBanner";
import InfoGrid from "@/components/InfoGrid/InfoGrid";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  const homeBanner = {
    bgImage: "/images/home.jpg",
    badge: "Simple • Clean • Next.js",
    title: "Build a modern website layout",
    subtitle: "Menu, banner, cards, form, and footer — all split into components.",

    primaryText: "Contact Us",
    primaryHref: "/contact",
    secondaryText: "View Features",
    secondaryHref: "/features",
    primaryBtnClass:
      "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primaryHover px-5 py-3 text-sm font-semibold text-mainText shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40",
    secondaryBtnClass:
      "inline-flex items-center justify-center rounded-xl border border-softBorder bg-customCard/60 px-5 py-3 text-sm font-semibold text-mainText backdrop-blur transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20",
  };

  const homeCards = [
    {
      image: "/images/teamwork.jpg",
      title: "Team Collaboration",
      text: "A team working together to turn ideas into innovative digital solutions.",
    },
    {
      image: "/images/coding.jpg",
      title: "Pure Development",
      text: "Building powerful and secure software through clean and efficient code.",
    },
    {
      image: "/images/design.jpg",
      title: "Modern UI",
      text: "We stay connected and ready to assist you whenever you need support.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-customBlue min-h-screen">
        <PageBanner {...homeBanner} />

        <InfoGrid
          sectionTitle="Our Core Features"
          sectionSubtitle="A clean and modern layout built with pure HTML and CSS."
          cards={homeCards}
          cardClass="overflow-hidden rounded-2xl border border-softBorder bg-customCard/60"
        />

        <section id="contact-form">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
