// // import Navbar from "@/components/Navbar/Navbar";
// // import Footer from "@/components/Footer/Footer";
// // import PageBanner from "@/components/PageBanner/PageBanner";
// // import InfoGrid from "@/components/InfoGrid/InfoGrid";
// // import ContactForm from "@/components/ContactForm/ContactForm";

// // export default function ContactPage() {
// //   const banner = {
// //     image: "/images/contact-hero.jpg",
// //     badge: "Contact • Support • Help",
// //     title: "Contact us anytime",
// //     subtitle: "Send us a message and we’ll reply as soon as possible.",
// //     buttons: [
// //       { label: "Send Message", href: "#contact-form", variant: "primary" as const },
// //       { label: "View Features", href: "/features", variant: "secondary" as const },
// //     ],
// //   };
// //   const cards = [
// //     {
// //       img: "/images/support.jpg",
// //       title: "Support",
// //       desc: "We help you fix issues and improve your project.",
// //     },
// //     {
// //       img: "/images/consulting.jpg",
// //       title: "Consulting",
// //       desc: "Advice for UI, structure, and best practices.",
// //     },
// //     {
// //       img: "/images/partnership.jpg",
// //       title: "Partnership",
// //       desc: "Let’s build something together.",
// //     },
// //   ];
// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-customBlue min-h-screen">
// //         <PageBanner {...banner} />

// //         <InfoGrid
// //           heading="How can we help?"
// //           subheading="Different content, same grid component."
// //           cards={cards}
// //         />

// //         <section id="contact-form">
// //           <ContactForm />
// //         </section>
// //       </main>

// //       <Footer />
// //     </>
// //   );
// // }

"use client";

import React, { useMemo, useRef, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageBanner from "@/components/PageBanner/PageBanner";
import InfoGrid from "@/components/InfoGrid/InfoGrid";
import ContactForm from "@/components/ContactForm/ContactForm";
import {Tabs,TabsHeader,TabsBody,Tab,TabPanel,Card,CardBody,Typography,} from "@material-tailwind/react";

const MTCard = (
  props: React.ComponentProps<"div"> & { children: React.ReactNode }
) => <Card {...(props as any)} />;

const MTCardBody = (
  props: React.ComponentProps<"div"> & { children: React.ReactNode }
) => <CardBody {...(props as any)} />;

type TabsValue = string;

const MTTabs = (props: { value: TabsValue; children: React.ReactNode }) => (
  <Tabs {...(props as any)} />
);

const MTTabsHeader = (props: {
  className?: string;
  indicatorProps?: Record<string, any>;
  children: React.ReactNode;
}) => <TabsHeader {...(props as any)} />;

const MTTabsBody = (props: { className?: string; children: React.ReactNode }) => (
  <TabsBody {...(props as any)} />
);

const MTTab = (props: {
  value: TabsValue;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) => <Tab {...(props as any)} />;

const MTTabPanel = (props: {
  value: TabsValue;
  className?: string;
  children: React.ReactNode;
}) => <TabPanel {...(props as any)} />;

const MTTypography = (props: {
  variant?: any;
  className?: string;
  children: React.ReactNode;
}) => <Typography {...(props as any)} />;

type ContactCard = { image: string; title: string; text: string };
type ContactTab = {label: string;value: string;title: string;text: string;bullets: string[];};

export default function ContactPage() {
  const contactBanner = useMemo(
    () => ({
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
    }),
    []
  );

  const contactCards: ContactCard[] = useMemo(
    () => [
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
    ],
    []
  );

  const tabs: ContactTab[] = useMemo(
    () => [
      {
        label: "Response Time",
        value: "response",
        title: "Typical Response Time",
        text: "We usually respond within 24–48 hours. If your request is urgent, mention “URGENT” in the subject/message so we can prioritize it.",
        bullets: [
          "Standard: 24–48 hours",
          "Urgent: mention “URGENT”",
          "Clear details = faster reply",
        ],
      },
      {
        label: "What to Include",
        value: "include",
        title: "Help us help you",
        text: "To get the best and fastest support, include the key details below in your message.",
        bullets: [
          "What page/feature you’re working on (e.g., Contact page Tabs)",
          "What you expected vs what happened",
          "Screenshots or error logs (if any)",
          "Your device (desktop/mobile) and browser",
        ],
      },
      {
        label: "FAQ",
        value: "faq",
        title: "Quick FAQ",
        text: "Common questions about contacting us.",
        bullets: [
          "Yes—UI/UX help and responsive fixes are supported.",
          "Yes—you can send screenshots and console errors.",
          "If it’s a bug, share the exact error message and file name.",
        ],
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const posterImage = "/images/contact-video-cover.jpg"; 
  const videoSrc = "/videos/contact-demo.mp4"; 

  const handlePlay = async () => {
    setIsPlaying(true);
    requestAnimationFrame(async () => {
      try {
        await videoRef.current?.play();
      } catch {
      }
    });
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

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
        <section className="pb-10">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
            <div className="mb-6 max-w-2xl">
              <h2 className="text-2xl font-extrabold text-mainText">
                Quick Video Overview
              </h2>
              <p className="text-mutedText">
                Click play to watch. When the video ends, it returns to the preview.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-softBorder bg-customCard/50 ring-1 ring-white/5">
              <div className="relative aspect-video w-full">
                {!isPlaying ? (
                  <>
                    <img
                      src={posterImage}
                      alt="Video preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25" />

                    <button
                      type="button"
                      onClick={handlePlay}
                      aria-label="Play video"
                      className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-white transition hover:scale-105 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                    >
                      <span className="ml-1 text-2xl leading-none">▶</span>
                    </button>
                    <div className="absolute bottom-4 left-4 rounded-xl border border-softBorder bg-customCard/60 px-3 py-2 text-sm text-mainText backdrop-blur">
                      Tap to play
                    </div>
                  </>
                ) : (
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    src={videoSrc}
                    controls
                    autoPlay
                    playsInline
                    onEnded={handleEnded}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
            <div className="mb-6 max-w-2xl">
              <h2 className="text-2xl font-extrabold text-mainText">
                Contact Info (Tabs)
              </h2>
              <p className="text-mutedText">
                Check response time, what to include, and quick FAQ before sending.
              </p>
            </div>

            <MTCard className="rounded-2xl border border-softBorder bg-customCard/60">
              <MTCardBody className="p-4 sm:p-6">
                <MTTabs value={activeTab}>
                  <MTTabsHeader
                    className="rounded-xl bg-customCard/60"
                    indicatorProps={{ className: "bg-purple-600/30" }}
                  >
                    {tabs.map((t) => (
                      <MTTab
                        key={t.value}
                        value={t.value}
                        onClick={() => setActiveTab(t.value)}
                        className={`text-sm font-semibold ${
                          activeTab === t.value ? "text-mainText" : "text-mutedText"
                        }`}
                      >
                        {t.label}
                      </MTTab>
                    ))}
                  </MTTabsHeader>

                  <MTTabsBody className="mt-5">
                    {tabs.map((t) => (
                      <MTTabPanel key={t.value} value={t.value} className="p-0">
                        <div className="rounded-2xl border border-softBorder bg-customCard/40 p-5">
                          <MTTypography
                            variant="h5"
                            className="mb-2 font-extrabold text-mainText"
                          >
                            {t.title}
                          </MTTypography>

                          <MTTypography className="text-sm text-mutedText">
                            {t.text}
                          </MTTypography>

                          <ul className="mt-4 grid gap-2">
                            {t.bullets.map((b) => (
                              <li
                                key={b}
                                className="flex items-start gap-2 text-sm text-mutedText"
                              >
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-500/80" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </MTTabPanel>
                    ))}
                  </MTTabsBody>
                </MTTabs>
              </MTCardBody>
            </MTCard>
          </div>
        </section>

        <section id="contact-form" className="container mx-auto px-4 sm:px-6 pb-20">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}

