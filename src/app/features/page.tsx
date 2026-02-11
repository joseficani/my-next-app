// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import PageBanner from "@/components/PageBanner/PageBanner";
// import InfoGrid from "@/components/InfoGrid/InfoGrid";

// export default function FeaturesPage() {
//   const banner = {
//     image: "/images/features-hero.jpg",
//     badge: "Explore • Components • UI",
//     title: "Features that make your site look modern",
//     subtitle: "Same layout, responsive container, clean design, and reusable components.",
//     buttons: [
//       { label: "Go to Contact", href: "/contact", variant: "primary" as const },
//       { label: "Back Home", href: "/", variant: "secondary" as const },
//     ],
//   };
//   const cards = [
//     {
//       img: "/images/teamwork.jpg",
//       title: "Reusable Components",
//       desc: "Use one banner and one grid across multiple pages.",
//     },
//     {
//       img: "/images/coding.jpg",
//       title: "Fast Development",
//       desc: "Clean structure, easy edits, and predictable layout.",
//     },
//     {
//       img: "/images/design.jpg",
//       title: "Responsive UI",
//       desc: "The Tailwind container keeps everything aligned on every screen.",
//     },
//   ];

//   return (
//     <>
//       <Navbar />
// <main className="bg-customBlue min-h-screen">
//         <PageBanner {...banner} />

//         <InfoGrid
//           heading="Our Features"
//           subheading="3 main blocks (dynamic content)."
//           cards={cards}
//         />
//       </main>

//       <Footer />
//     </>
//   );
// }
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageBanner from "@/components/PageBanner/PageBanner";
import InfoGrid from "@/components/InfoGrid/InfoGrid";

export default function FeaturesPage() {
const featuresBanner = {
  bgImage: "/images/features-hero.jpg",
  badge: "Explore • Components • UI",
  title: "Features that make your site look modern",
  subtitle:
    "Same layout, responsive container, clean design, and reusable components.",

  primaryText: "Go to Contact",
  primaryHref: "/contact",
  secondaryText: "Back Home",
  secondaryHref: "/",
  center: true,
  tight: true,

  primaryBtnClass:
    "inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40",

  secondaryBtnClass:
    "inline-flex items-center justify-center rounded-xl border border-softBorder bg-customCard/60 px-5 py-3 text-sm font-semibold text-mainText backdrop-blur transition hover:bg-customCard/80",
};



  const featuresCards = [
    {
      image: "/images/teamwork.jpg",
      title: "Reusable Components",
      text: "Use one banner and one grid across multiple pages.",
    },
    {
      image: "/images/coding.jpg",
      title: "Fast Development",
      text: "Clean structure, easy edits, and predictable layout.",
    },
    {
      image: "/images/design.jpg",
      title: "Responsive UI",
      text: "The Tailwind container keeps everything aligned on every screen.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-customBlue">
        <PageBanner {...featuresBanner} />

        <InfoGrid
          sectionTitle="Our Features"
          sectionSubtitle="3 main blocks (dynamic content)."
          cards={featuresCards}
          cardClass="overflow-hidden rounded-2xl border border-softBorder bg-customCard/70 transition hover:bg-customCard/80"
        />
      </main>

      <Footer />
    </>
  );
}
