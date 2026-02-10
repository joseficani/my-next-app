// import styles from "./page.module.css";
// import Navbar from "@/components/Navbar/Navbar";
// import Hero from "@/components/Hero/Hero";
// import Features from "@/components/Features/Features";
// import ContactForm from "@/components/ContactForm/ContactForm";
// import Footer from "@/components/Footer/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <main className={styles.main}>
//         <Hero />
//         <Features />
//         <ContactForm />
//       </main>

//       <Footer />
//     </>
//   );
// }
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-customBlue">
        <Hero />
        <Features />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
