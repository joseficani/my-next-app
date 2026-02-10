import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageBanner from "@/components/PageBanner/PageBanner";
import InfoGrid from "@/components/InfoGrid/InfoGrid";

export default function FeaturesPage() {
  const banner = {
    image: "/images/features-hero.jpg",
    badge: "Explore • Components • UI",
    title: "Features that make your site look modern",
    subtitle: "Same layout, responsive container, clean design, and reusable components.",
    buttons: [
      { label: "Go to Contact", href: "/contact", variant: "primary" as const },
      { label: "Back Home", href: "/", variant: "secondary" as const },
    ],
  };

  const cards = [
    {
      img: "/images/teamwork.jpg",
      title: "Reusable Components",
      desc: "Use one banner and one grid across multiple pages.",
    },
    {
      img: "/images/coding.jpg",
      title: "Fast Development",
      desc: "Clean structure, easy edits, and predictable layout.",
    },
    {
      img: "/images/design.jpg",
      title: "Responsive UI",
      desc: "The Tailwind container keeps everything aligned on every screen.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-customBlue">
        <PageBanner {...banner} />

        <InfoGrid
          heading="Our Features"
          subheading="3 main blocks (dynamic content)."
          cards={cards}
        />
      </main>

      <Footer />
    </>
  );
}
