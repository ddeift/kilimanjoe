import styles from "../privacy-protection/privacy-protection.module.scss"

export default function Impressum (){
    return(
        <div className={styles.textContainer}>
          <p className={styles.title}>Impressum</p>
          <p className={styles.subtitle}>Angaben gemäß § 5 TMG</p>
          <p className={styles.bodyText}>KilimanJoe GmbH</p>
          <p className={styles.bodyText}>Kurfürstenstr. 79</p>
          <p className={styles.bodyText}>10787 Berlin</p>
          <p className={styles.subtitle}>Vertreten durch:</p>
          <p className={styles.bodyText}>Geschäftsführerin Alina Martinova</p>
          <p className={styles.subtitle}>Kontakt</p>

          <p className={styles.bodyText}>E-Mail: kilimanjoe@gmx.de</p>
          <p className={styles.subtitle}>Registereintrag</p>
          <p className={styles.bodyText}>Eintragung im Handelsregister.</p>
          <p className={styles.bodyText}>
            Registergericht: Amtsgericht Charlottenburg von Berlin
          </p>
          <p className={styles.bodyText}>Registernummer: HR B 177002 B</p>
          <p className={styles.subtitle}>Umsatzsteuer-ID</p>
          <p className={styles.bodyText}>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
          </p>
          <p className={styles.bodyText}>Steuernummer: 30/379/50510</p>
          <p className={styles.bodyText}>Ust.-ID: DE 282002656</p>
          <p className={styles.subtitle}>Aufsichtsbehörde</p>

          <p className={styles.subtitle}>
            Quellenangaben für die verwendeten Bilder und Grafiken:
          </p>
          <p className={styles.bodyText}>Bilder von http://www.fotolia.com</p>
          <p className={styles.bodyText}>Haftungsausschluss (Disclaimer)</p>
          <p className={styles.subtitle}>Haftung für Inhalte</p>
          <p className={styles.bodyText}>
            Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <p className={styles.subtitle}>Haftung für Links</p>
          <p className={styles.bodyText}>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <p className={styles.subtitle}>Urheberrecht</p>
          <p className={styles.bodyText}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
    )
}