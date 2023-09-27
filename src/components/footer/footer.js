import styles from "./footer.module.scss";
import Link from "next/link"


export default function Footer({ setPrivacyProtection, setIndexPage, setImpressum}) {
  return (
    <div className={styles.mainContainer}>
      <div>
        <Link href="#top" className={styles.link} onClick={()=>{
          setPrivacyProtection(false)
          setIndexPage(false)
          setImpressum(true)
          
        }}>
          Impressum
        </Link>
        <br />
        <br />
        <Link href="#top" className={styles.link} onClick={()=>{
          setPrivacyProtection(true)
          setIndexPage(false)
          setImpressum(false)
          
        }} >
          Datenschutzerklärung
        </Link>
      </div>
    </div>
  );
}
