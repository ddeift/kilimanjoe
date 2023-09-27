import styles from "./hero-banner.module.scss";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <p className={styles.mainText}>KilimanJoe Pension</p>
        <p className={styles.subText}>
          Wir würden uns freuen, auch Sie als Gast in unserer Pension begrüßen
          zu dürfen!
        </p>
        <Link href="#contact" className={styles.bookBtn}>
          {" "}
          <p>Jetzt Anfragen</p>
        </Link>
      </div>
    </div>
  );
}
