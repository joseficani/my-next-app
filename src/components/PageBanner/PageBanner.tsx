
// type BannerButton = { label: string; href: string; variant?: "primary" | "secondary" };
// type PageBannerProps = {
//   image: string;
//   badge?: string;
//   title: string;
//   subtitle: string;
//   buttons?: BannerButton[];
//   positionClassName?: string;
// };
// export default function PageBanner(props: PageBannerProps) {
//   const { image, badge, title, subtitle, buttons = [], positionClassName = "bg-center" } = props;

//   const primaryBtn =
//     "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primaryHover px-5 py-3 text-sm font-semibold text-mainText shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40";

//   const secondaryBtn =
//     "inline-flex items-center justify-center rounded-xl border border-softBorder bg-customCard/60 px-5 py-3 text-sm font-semibold text-mainText backdrop-blur transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20";

//   return (
//     <section
//       className={`relative w-full overflow-hidden border-y border-softBorder bg-cover bg-no-repeat ${positionClassName}`}
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div className="absolute inset-0 bg-black/35" />
//       <div className="relative container mx-auto px-4 py-10 sm:px-6 sm:py-14">
//         <div className="max-w-2xl">
//           {badge && (
//             <p className="mb-4 inline-flex rounded-full border border-softBorder bg-customCard/60 px-3 py-2 text-sm text-mutedText backdrop-blur">
//               {badge}
//             </p>
//           )}

//           <h1 className="mb-3 text-4xl font-extrabold leading-tight text-mainText sm:text-5xl">
//             {title}
//           </h1>

//           <p className="mb-6 max-w-xl text-base leading-relaxed text-mutedText">{subtitle}</p>

//           {buttons.length > 0 && (
//             <div className="flex flex-wrap gap-3">
//               {buttons.map((btn) => {
//                 const isPrimary = btn.variant !== "secondary";
//                 return (
//                   <a key={`${btn.label}-${btn.href}`} href={btn.href} className={isPrimary ? primaryBtn : secondaryBtn}>
//                     {btn.label}
//                   </a>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

type PageBannerProps = {
  bgImage: string;
  badge?: string;
  title: string;
  subtitle: string;

  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;

  primaryBtnClass?: string;
  secondaryBtnClass?: string;

  center?: boolean;
  tight?: boolean;
};

export default function PageBanner({
  bgImage,
  badge,
  title,
  subtitle,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  primaryBtnClass,
  secondaryBtnClass,
  center = false,
  tight = false,
}: PageBannerProps) {
  const defaultPrimary =
    "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primaryHover px-5 py-3 text-sm font-semibold text-mainText shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40";

  const defaultSecondary =
    "inline-flex items-center justify-center rounded-xl border border-softBorder bg-customCard/60 px-5 py-3 text-sm font-semibold text-mainText backdrop-blur transition hover:bg-customCard/80 focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <section
      className="relative w-full overflow-hidden border-y border-softBorder bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/35" />
  <div className="relative mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">
        <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"}>
          {badge && (
            <div className={center ? "mb-4 flex justify-center" : "mb-4"}>
              <span className="inline-flex rounded-full border border-softBorder bg-customCard/60 px-3 py-2 text-sm text-mutedText backdrop-blur">
                {badge}
              </span>
            </div>
          )}

          <h1 className={`text-4xl font-extrabold leading-tight text-mainText sm:text-5xl ${tight ? "mb-1" : "mb-3"}`}>
            {title}
          </h1>

          <p
            className={`text-base leading-relaxed text-mutedText ${tight ? "mb-5" : "mb-6"} ${
              center ? "mx-auto max-w-xl" : "max-w-xl"
            }`}
          >
            {subtitle}
          </p>

          {(primaryText || secondaryText) && (
            <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
              {primaryText && primaryHref && (
                <a href={primaryHref} className={primaryBtnClass ?? defaultPrimary}>
                  {primaryText}
                </a>
              )}

              {secondaryText && secondaryHref && (
                <a href={secondaryHref} className={secondaryBtnClass ?? defaultSecondary}>
                  {secondaryText}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
