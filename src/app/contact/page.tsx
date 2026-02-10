import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageBanner from "@/components/PageBanner/PageBanner";
import InfoGrid from "@/components/InfoGrid/InfoGrid";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactPage() {
  const banner = {
    image: "/images/contact-hero.jpg",
    badge: "Contact • Support • Help",
    title: "Contact us anytime",
    subtitle: "Send us a message and we’ll reply as soon as possible.",
    buttons: [
      { label: "Send Message", href: "#contact-form", variant: "primary" as const },
      { label: "View Features", href: "/features", variant: "secondary" as const },
    ],
  };

  const cards = [
    {
      img: "/images/support.jpg",
      title: "Support",
      desc: "We help you fix issues and improve your project.",
    },
    {
      img: "/images/consulting.jpg",
      title: "Consulting",
      desc: "Advice for UI, structure, and best practices.",
    },
    {
      img: "/images/partnership.jpg",
      title: "Partnership",
      desc: "Let’s build something together.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-customBlue">
        <PageBanner {...banner} />

        <InfoGrid
          heading="How can we help?"
          subheading="Different content, same grid component."
          cards={cards}
        />

        <section id="contact-form">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
