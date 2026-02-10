// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import PageBanner from "@/components/PageBanner/PageBanner";
// import InfoGrid from "@/components/InfoGrid/InfoGrid";
// import ContactForm from "@/components/ContactForm/ContactForm";

// export default function ContactPage() {
//   const banner = {
//     image: "/images/contact-hero.jpg",
//     badge: "Contact • Support • Help",
//     title: "Contact us anytime",
//     subtitle: "Send us a message and we’ll reply as soon as possible.",
//     buttons: [
//       { label: "Send Message", href: "#contact-form", variant: "primary" as const },
//       { label: "View Features", href: "/features", variant: "secondary" as const },
//     ],
//   };
//   const cards = [
//     {
//       img: "/images/support.jpg",
//       title: "Support",
//       desc: "We help you fix issues and improve your project.",
//     },
//     {
//       img: "/images/consulting.jpg",
//       title: "Consulting",
//       desc: "Advice for UI, structure, and best practices.",
//     },
//     {
//       img: "/images/partnership.jpg",
//       title: "Partnership",
//       desc: "Let’s build something together.",
//     },
//   ];
//   return (
//     <>
//       <Navbar />

//       <main className="bg-customBlue min-h-screen">
//         <PageBanner {...banner} />

//         <InfoGrid
//           heading="How can we help?"
//           subheading="Different content, same grid component."
//           cards={cards}
//         />

//         <section id="contact-form">
//           <ContactForm />
//         </section>
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

export default function ContactPage() {
  const contactBanner = {
    bgImage: "/images/contact-hero.jpg",
    badge: "Contact • Support • Help",
    title: "Contact us anytime",
    subtitle: "Send us a message and we’ll reply as soon as possible.",

    primaryText: "Send Message",
    primaryHref: "#contact-form",
    secondaryText: "View Features",
    secondaryHref: "/features",
    primaryBtnClass:
      "inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition hover:-translate-y-0.5 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400/40",
    secondaryBtnClass:
      "inline-flex items-center justify-center rounded-xl border border-softBorder bg-customCard/60 px-5 py-3 text-sm font-semibold text-mainText backdrop-blur transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20",
  };

  const contactCards = [
    {
      image: "/images/support.jpg",
      title: "Support",
      text: "We help you fix issues and improve your project.",
    },
    {
      image: "/images/consulting.jpg",
      title: "Consulting",
      text: "Advice for UI, structure, and best practices.",
    },
    {
      image: "/images/partnership.jpg",
      title: "Partnership",
      text: "Let’s build something together.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-customBlue min-h-screen">
        <PageBanner {...contactBanner} />

        <InfoGrid
          sectionTitle="How can we help?"
          sectionSubtitle="Different content, same grid component."
          cards={contactCards}
          cardClass="overflow-hidden rounded-2xl border border-softBorder bg-customCard/60 ring-1 ring-white/5"
        />

        <section id="contact-form" className="container mx-auto px-4 sm:px-6 pb-20">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
