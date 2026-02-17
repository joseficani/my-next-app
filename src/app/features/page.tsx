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
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Pagination,EffectCoverflow,Autoplay,Keyboard,Mousewheel,} from "swiper/modules";
import {Accordion,AccordionHeader,AccordionBody,} from "@material-tailwind/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

type FeatureCard = {
  image: string;
  title: string;
  text: string;
  category: string;
  detailsTitle: string;
  detailsText: string;
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
      detailsTitle: "Pure Development",
      detailsText:
        "Clean structure and reusable UI so you can update faster without breaking layout. It keeps components consistent across pages.",
    },
    {
      image: "/images/coding.jpg",
      title: "Fast Development",
      text: "Clean structure, Modern UI, and predictable layout.",
      category: "Development",
      detailsTitle: "Fast Development",
      detailsText:
        "A predictable folder structure + reusable components makes edits quick. Add new sections and pages without rewriting everything.",
    },
    {
      image: "/images/design.jpg",
      title: "Responsive UI",
      text: "The Tailwind container keeps everything aligned on every screen.",
      category: "UI",
      detailsTitle: "Responsive UI",
      detailsText:
        "Your layout stays aligned on desktop, tablet, and mobile. The max-width container ensures the banner lines up with the sections below.",
    },
    {
      image: "/images/coding.jpg",
      title: "Simple Navigation",
      text: "Clear pages (Home, Features, Contact) with a reusable navbar.",
      category: "Navigation",
      detailsTitle: "Simple Navigation",
      detailsText:
        "Users can move between pages quickly. Active-link styling makes it clear which page they are viewing.",
    },
    {
      image: "/images/teamwork.jpg",
      title: "Reusable Components",
      text: "One dynamic banner component with different content per page.",
      category: "Components",
      detailsTitle: "Reusable Components",
      detailsText:
        "Instead of making different banners, you pass props (image, title, buttons). This keeps code clean and scalable.",
    },
    {
      image: "/images/design.jpg",
      title: "Clean Layout",
      text: "Consistent spacing and container alignment across sections.",
      category: "UI",
      detailsTitle: "Clean Layout",
      detailsText:
        "Spacing stays consistent because each section uses the same container width and padding. This gives your UI a professional feel.",
    },
    {
      image: "/images/teamwork.jpg",
      title: "Team Collaboration",
      text: "Work faster with clear structure and shared components.",
      category: "Collaboration",
      detailsTitle: "Team Collaboration",
      detailsText:
        "Shared components avoid duplication and reduce bugs when multiple people work on the project.",
    },
    {
      image: "/images/coding.jpg",
      title: "Maintainable Code",
      text: "Predictable files and reusable UI blocks for easy updates.",
      category: "Development",
      detailsTitle: "Maintainable Code",
      detailsText:
        "Modular code is easier to maintain. Updating one component updates multiple pages automatically.",
    },
    {
      image: "/images/design.jpg",
      title: "Modern Styling",
      text: "Hover states and soft borders for a modern look and feel.",
      category: "UI",
      detailsTitle: "Modern Styling",
      detailsText:
        "Subtle hover effects, soft borders, and consistent cards make the UI modern while staying readable and clean.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return Array.from(new Set(allFeatureCards.map((c) => c.category))).sort();
  }, [allFeatureCards]);

  const filteredCards = useMemo(() => {
    const list =
      selectedCategory === "all"
        ? allFeatureCards
        : allFeatureCards.filter((x) => x.category === selectedCategory);

    return list.map((x) => ({
      image: x.image,
      title: x.title,
      text: x.text,
      detailsTitle: x.detailsTitle,
      detailsText: x.detailsText,
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

  const [open, setOpen] = useState<number>(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-customBlue">
        <PageBanner {...featuresBanner} />

        <InfoGrid
          sectionTitle="Our Features"
          sectionSubtitle="Dynamic cards + filter."
          cards={filteredCards}
          cardClass="overflow-hidden rounded-2xl border border-softBorder bg-customCard/70 transition hover:bg-customCard/80"
          rightSlot={rightSlot}
        />

        <section className="py-14">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
            <div className="mb-6 max-w-2xl">
              <h2 className="text-2xl font-extrabold text-mainText">
                Featured Slider
              </h2>
              <p className="text-mutedText">Swipe through the features.</p>
            </div>

            <div className="rounded-2xl border border-softBorder bg-customCard/40 p-4">
              <div className="grid items-center gap-3 md:grid-cols-[56px_1fr_56px]">
                <button
                  type="button"
                  className="features-prev inline-flex h-12 w-12 items-center justify-center rounded-xl border border-softBorder bg-customCard/60 text-mainText transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="Previous"
                >
                  ‹
                </button>

                <div className="min-w-0">
                  <Swiper
                    modules={[
                      Navigation,
                      Pagination,
                      EffectCoverflow,
                      Autoplay,
                      Keyboard,
                      Mousewheel,
                    ]}
                    navigation={{
                      prevEl: ".features-prev",
                      nextEl: ".features-next",
                    }}
                    pagination={{
                      clickable: true,
                      el: ".features-swiper-pagination",
                    }}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="features-swiper"
                    loop
                    speed={650}
                    grabCursor
                    centeredSlides
                    watchSlidesProgress
                    keyboard={{ enabled: true }}
                    mousewheel={{ forceToAxis: true }}
                    effect="coverflow"
                    coverflowEffect={{
                      rotate: 10,
                      stretch: 0,
                      depth: 120,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                  >
                    {filteredCards.map((card, i) => (
                      <SwiperSlide key={`${card.title}-${i}`}>
                        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-softBorder bg-customCard/60 transition hover:bg-customCard/80">
                          <div className="h-44 w-full overflow-hidden">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="flex flex-1 flex-col p-5">
                            <h3 className="text-base font-semibold text-mainText">
                              {card.title}
                            </h3>
                            <p className="mt-1 text-sm text-mutedText">
                              {card.text}
                            </p>
                            <div className="mt-auto" />
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="features-swiper-pagination mt-5 flex items-center justify-center" />
                </div>

                <button
                  type="button"
                  className="features-next inline-flex h-12 w-12 items-center justify-center rounded-xl border border-softBorder bg-customCard/60 text-mainText transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
            <div className="mb-6 max-w-2xl">
              <h2 className="text-2xl font-extrabold text-mainText">
                Feature Details (Accordion)
              </h2>
              <p className="text-mutedText">Click a title to expand.</p>
            </div>

            <div className="rounded-2xl border border-softBorder bg-customCard/40 p-4">
              {allFeatureCards.slice(0, 3).map((item, idx) => {
                const value = idx + 1;
                const accId = `feature-acc-${value}`;
                const isActive = open === value;

                return (
                  <Accordion
                    key={accId}
                    id={accId}
                    open={isActive}
                    className="mb-3 rounded-2xl border border-softBorder bg-customCard/60 px-4"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <AccordionHeader
                      id={`${accId}-header`}
                      onClick={() => handleOpen(value)}
                      className={`border-b-0 cursor-pointer ${
                        isActive ? "text-emerald-400" : "text-mainText"
                      }`}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <span className="flex w-full items-center justify-between gap-3">
                        <span>{item.detailsTitle}</span>
                        <span
                          aria-hidden="true"
                          className={`text-lg transition-transform duration-200 ${
                            isActive
                              ? "rotate-180 text-emerald-400"
                              : "rotate-0 text-mutedText"
                          }`}
                        >
                          ▾
                        </span>
                      </span>
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-mutedText">
                      {item.detailsText}
                    </AccordionBody>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </section>

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

        <style jsx global>{`
          .features-swiper .swiper-wrapper {
            align-items: stretch;
          }
          .features-swiper .swiper-slide {
            height: auto;
            display: flex;
            transition: transform 250ms ease, opacity 250ms ease;
          }
          .features-swiper .swiper-slide > * {
            width: 100%;
          }

          .features-swiper .swiper-slide {
            opacity: 0.75;
            transform: scale(0.98);
          }
          .features-swiper .swiper-slide.swiper-slide-active,
          .features-swiper .swiper-slide.swiper-slide-next,
          .features-swiper .swiper-slide.swiper-slide-prev {
            opacity: 1;
            transform: scale(1);
          }

          .features-swiper-pagination .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.25);
            opacity: 1;
            margin: 0 6px !important;
            transition: transform 200ms ease, background 200ms ease,
              width 200ms ease;
          }
          .features-swiper-pagination .swiper-pagination-bullet:hover {
            transform: scale(1.15);
            background: rgba(255, 255, 255, 0.4);
          }
          .features-swiper-pagination .swiper-pagination-bullet-active {
            width: 26px;
            background: rgba(16, 185, 129, 0.95);
          }

          .features-prev.swiper-button-disabled,
          .features-next.swiper-button-disabled {
            opacity: 0.45;
            cursor: not-allowed;
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
