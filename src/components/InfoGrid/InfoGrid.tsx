
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

type Card = {
  image: string;
  title: string;
  text: string;
};

type InfoGridProps = {
  sectionTitle: string;
  sectionSubtitle?: string;
  cards: Card[];
  cardClass?: string;
};

export default function InfoGrid({
  sectionTitle,
  sectionSubtitle,
  cards,
  cardClass = "",
}: InfoGridProps) {
  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-extrabold text-mainText">
            {sectionTitle}
          </h2>

          {sectionSubtitle && (
            <p className="mt-1 text-sm text-mutedText">
              {sectionSubtitle}
            </p>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
