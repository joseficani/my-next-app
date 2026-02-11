
// type CardItem = { img: string; title: string; desc: string };
// type InfoGridProps = { heading: string; subheading?: string; cards: CardItem[] };

// export default function InfoGrid(props: InfoGridProps) {
//   const { heading, subheading, cards } = props;

//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="mb-8">
//           <h2 className="text-2xl font-extrabold text-mainText">{heading}</h2>
//           {subheading && <p className="mt-1 text-sm text-mutedText">{subheading}</p>}
//         </div>

//         <div className="grid gap-6 md:grid-cols-3">
//           {cards.map((c) => (
//             <article
//               key={c.title}
//               className="overflow-hidden rounded-2xl border border-softBorder bg-customCard/60"
//             >
//               <div className="h-48 w-full overflow-hidden">
//                 <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
//               </div>

//               <div className="p-5">
//                 <h3 className="text-base font-semibold text-mainText">{c.title}</h3>
//                 <p className="mt-1 text-sm text-mutedText">{c.desc}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type Card = {
  image: string;
  title: string;
  text: string;
  detailsTitle?: string;
  detailsText?: string;
};

type InfoGridProps = {
  sectionTitle: string;
  sectionSubtitle?: string;
  cards: Card[];
  cardClass?: string;
  rightSlot?: ReactNode;
};

export default function InfoGrid({
  sectionTitle,
  sectionSubtitle,
  cards,
  cardClass = "",
  rightSlot,
}: InfoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);

  const next = () => {
    if (openIndex === null) return;
    if (cards.length === 0) return;
    setOpenIndex((openIndex + 1) % cards.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeCard = openIndex !== null ? cards[openIndex] : null;

  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold text-mainText">
              {sectionTitle}
            </h2>

            {sectionSubtitle && (
              <p className="mt-1 text-sm text-mutedText">
                {sectionSubtitle}
              </p>
            )}
          </div>

          {rightSlot && (
            <div className="w-full sm:w-[260px]">
              {rightSlot}
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={index}
              className={`overflow-hidden rounded-2xl border border-softBorder bg-customCard/60 transition hover:bg-customCard/80 ${cardClass}`}
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-mainText">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-mutedText">
                  {card.text}
                </p>

                {(card.detailsTitle || card.detailsText) && (
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-xl border border-softBorder bg-customCard/60 px-4 py-2 text-sm font-semibold text-mainText transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    More details
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeCard && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 px-4"
          onClick={close}
        >
          <div
            className="w-full max-w-[680px] overflow-hidden rounded-2xl border border-softBorder bg-customBlue shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between gap-4 border-b border-softBorder bg-customCard/40 p-5">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-extrabold text-mainText">
                  {activeCard.detailsTitle ?? activeCard.title}
                </h3>
                <p className="mt-1 text-sm text-mutedText">
                  {activeCard.text}
                </p>
              </div>

              <button
                type="button"
                onClick={close}
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-softBorder bg-customCard/60 text-mainText transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-5">
              <p className="text-sm leading-relaxed text-mutedText">
                {activeCard.detailsText ?? "More details coming soon."}
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primaryHover px-5 py-2.5 text-sm font-semibold text-mainText shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  Next feature
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
