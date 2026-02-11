// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import PageBanner from "@/components/PageBanner/PageBanner";
// import InfoGrid from "@/components/InfoGrid/InfoGrid";

// export default function FeaturesPage() {
//   const banner = {
//     image: "/images/features-hero.jpg",
//     badge: "Explore • Components • UI",
//     title: "Features that make your site look modern",
//     subtitle: "Same layout, responsive container, Team Collaboration, and Pure Development.",
//     buttons: [
//       { label: "Go to Contact", href: "/contact", variant: "primary" as const },
//       { label: "Back Home", href: "/", variant: "secondary" as const },
//     ],
//   };
//   const cards = [
//     {
//       img: "/images/teamwork.jpg",
//       title: "Pure Development",
//       desc: "Use one banner and one grid across multiple pages.",
//     },
//     {
//       img: "/images/coding.jpg",
//       title: "Fast Development",
//       desc: "Clean structure, Modern UI, and predictable layout.",
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
"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageBanner from "@/components/PageBanner/PageBanner";
import InfoGrid from "@/components/InfoGrid/InfoGrid";

type FeatureCard = {
  image: string;
  title: string;
  text: string;
  category: string;
};

export default function FeaturesPage() {
  const featuresBanner = {
    bgImage: "/images/features-hero.jpg",
    badge: "Explore • Components • UI",
    title: "Features that make your site look modern",
    subtitle:
      "Same layout, responsive container, Team Collaboration, and Pure Development.",

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
  const allFeatureCards: FeatureCard[] = [
    {
      image: "/images/teamwork.jpg",
      title: "Pure Development",
      text: "Use one banner and one grid across multiple pages.",
      category: "Development",
    },
    {
      image: "/images/coding.jpg",
      title: "Fast Development",
      text: "Clean structure, Modern UI, and predictable layout.",
      category: "Development",
    },
    {
      image: "/images/design.jpg",
      title: "Responsive UI",
      text: "The Tailwind container keeps everything aligned on every screen.",
      category: "UI",
    },

    {
      image: "/images/coding.jpg",
      title: "Simple Navigation",
      text: "Clear pages (Home, Features, Contact) with a reusable navbar.",
      category: "Navigation",
    },
    {
      image: "/images/teamwork.jpg",
      title: "Reusable Components",
      text: "One dynamic banner component with different content per page.",
      category: "Components",
    },
    {
      image: "/images/design.jpg",
      title: "Clean Layout",
      text: "Consistent spacing and container alignment across sections.",
      category: "UI",
    },

    {
      image: "/images/teamwork.jpg",
      title: "Team Collaboration",
      text: "Work faster with clear structure and shared components.",
      category: "Collaboration",
    },
    {
      image: "/images/coding.jpg",
      title: "Maintainable Code",
      text: "Predictable files and reusable UI blocks for easy updates.",
      category: "Development",
    },
    {
      image: "/images/design.jpg",
      title: "Modern Styling",
      text: "Hover states and soft borders for a modern look and feel.",
      category: "UI",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return Array.from(new Set(allFeatureCards.map((c) => c.category))).sort();
  }, [allFeatureCards]);

  const filteredCards = useMemo(() => {
    let list = [...allFeatureCards];

    if (selectedCategory !== "all") {
      list = list.filter((x) => x.category === selectedCategory);
    }
    return list.map((x) => ({
      image: x.image,
      title: x.title,
      text: x.text,
    }));
  }, [allFeatureCards, selectedCategory]);

  const rightSlot = (
    <div className="grid gap-2">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full rounded-xl border border-softBorder bg-customCard/60 px-4 py-2 text-sm text-mainText outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      >
        <option value="all">Filter by Category</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
  const options = [
    "Pure Development",
    "Fast Development",
    "Responsive UI",
    "Team Collaboration",
    "Modern UI",
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(selected);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-customBlue">
        <PageBanner {...featuresBanner} />
        <InfoGrid
          sectionTitle="Our Features"
          sectionSubtitle="3 main blocks (dynamic content)."
          cards={filteredCards}
          cardClass="overflow-hidden rounded-2xl border border-softBorder bg-customCard/70 transition hover:bg-customCard/80"
          rightSlot={rightSlot}
        />
        <section className="py-14">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
            <div className="mb-6 max-w-2xl">
              <h2 className="text-2xl font-extrabold text-mainText">
                Choose your favorite features
              </h2>
              <p className="text-mutedText">
                Select one or multiple options, then submit.
              </p>
            </div>

            <div className="rounded-2xl border border-softBorder bg-customCard/60 p-6">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {options.map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-softBorder bg-customCard/60 p-4 text-mainText transition hover:bg-customCard/80"
                    >
                      <input
                        type="checkbox"
                        checked={selected.includes(opt)}
                        onChange={() => toggleOption(opt)}
                        className="h-5 w-5 accent-emerald-500"
                      />
                      <span className="text-sm font-semibold">{opt}</span>
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                >
                  Submit
                </button>
              </form>

              {submitted.length > 0 && (
                <div className="mt-6 rounded-xl border border-softBorder bg-customCard/60 p-4">
                  <p className="text-sm font-semibold text-mainText">
                    You selected:
                  </p>
                  <p className="mt-1 text-sm text-mutedText">
                    {submitted.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
