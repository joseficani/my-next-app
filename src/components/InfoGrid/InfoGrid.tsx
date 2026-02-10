type CardItem = {
  img: string;
  title: string;
  desc: string;
};

type InfoGridProps = {
  heading: string;
  subheading?: string;
  cards: CardItem[];
};

export default function InfoGrid({
  heading,
  subheading,
  cards,
}: InfoGridProps) {
  return (
    <section className="py-12">
      <div className="container px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-mainText">
            {heading}
          </h2>

          {subheading && (
            <p className="mt-1 text-sm text-mutedText">
              {subheading}
            </p>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl border border-softBorder bg-customCard"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-mainText">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-mutedText">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
