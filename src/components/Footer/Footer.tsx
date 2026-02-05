// import styles from "./Footer.module.css";

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.inner}>
//         <p className={styles.copy}>© {new Date().getFullYear()} Site</p>

//         <div className={styles.social}>
//           <a className={styles.iconBtn} href="#" aria-label="Facebook">
//             <img
//               className={styles.iconImg}
//               src="/images/facebook.png"
//               alt="Facebook"
//             />
//           </a>

//           <a className={styles.iconBtn} href="#" aria-label="Instagram">
//             <img
//               className={styles.iconImg}
//               src="/images/instagram.png"
//               alt="Instagram"
//             />
//           </a>

//           <a className={styles.iconBtn} href="#" aria-label="LinkedIn">
//             <img
//               className={styles.iconImg}
//               src="/images/linkedin.png"
//               alt="LinkedIn"
//             />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a101c]/90">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-4">
        <p className="text-sm text-white/65">
          © {new Date().getFullYear()} Site
        </p>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="inline-flex items-center justify-center transition hover:-translate-y-[2px] hover:opacity-85"
          >
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="h-[18px] w-[18px] object-contain"
            />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="inline-flex items-center justify-center transition hover:-translate-y-[2px] hover:opacity-85"
          >
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="h-[18px] w-[18px] object-contain"
            />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center transition hover:-translate-y-[2px] hover:opacity-85"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="h-[18px] w-[18px] object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
