import styles from "./navbar.module.scss";



export default function Navbar({setCookiesAgreed, cookiesAgreed, setPrivacyProtection, setIndexPage, setImpressum}) {
  

  return (
    <div className={styles.mainContainer}>
      {!cookiesAgreed && (
        <div className={styles.cookiesContainer}>
          <p>
            Durch die weitere Nutzung der Seite Stimmst du der Verwendung von
            Cookies zu.
            <a onClick={()=>{
              setPrivacyProtection(true)
              setIndexPage(false)
              setImpressum(false)
            }} className={styles.link}>
              Weitere Informationen
            </a>
          </p>
          <button
            onClick={() => {
              setCookiesAgreed(true);
            }}
            className={styles.btn}
          >
            Akzeptieren
          </button>
        </div>
      )}

      
      <a onClick={()=>{
        setPrivacyProtection(false)
        setImpressum(false)
        setIndexPage(true)
      }} className={styles.title}>
     <img className={styles.logo} src="KMJ_Logo.png" alt="KilimanJoe Logo"/>
     
      </a>
    </div>
  );
}
