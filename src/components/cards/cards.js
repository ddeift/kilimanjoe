import styles from "./cards.module.scss";

export default function Cards() {
  const cardData = [
    {
      title: "Cauer",
      street: "Cauerstraße",
      zip: "10587 Berlin",
    },
    {
      title: "Helmholtz",
      street: "Helmholtzstraße",
      zip: "10587 Berlin",
    },
    {
      title: "Mommsen",
      street: "Mommsenstraße",
      zip: "10627 Berlin",
    },
    {
      title: "OSA",
      street: "Otto-Suhr-Allee",
      zip: "10585 Berlin",
    },
    {
      title: "Pichelssee",
      street: "Am Pichelssee",
      zip: "13595 Berlin",
    },
    {
      title: "Streit",
      street: "Streitstraße",
      zip: "13587 Berlin",
    },
    {
      title: "Schilling",
      street: "Schillingstraße",
      zip: "13403 Berlin",
    },
    {
      title: "Windscheid",
      street: "Windscheidstraße",
      zip: "10627 Berlin",
    },
    {
      title: "See",
      street: "Seestraße",
      zip: "13353 Berlin",
    },
    {
      title: "Ostender",
      street: "Ostenderstraße",
      zip: "13353 Berlin",
    },
    {
      title: "Reuchlin",
      street: "Reuchlinstraße",
      zip: "10553 Berlin",
    },
    {
      title: "Rathenower",
      street: "Rathenowerstraße",
      zip: "10559 Berlin",
    },
    {
        title: "Ernst",
        street: "Ernststraße",
        zip: "13509 Berlin",
      },
      {
        title: "Zossen",
        street: "Am Bahnhof",
        zip: "15806 Zossen",
      },
  ];

  return (
    <div className={styles.mainContainer}>
      <p className={styles.mainTitle}>Usere Pensionen</p>
      <div className={styles.cardsContainer}>{cardData.map((item, idx) => {
        return (
          <div key={idx} className={styles.card}>
            <p className={styles.cardTitle}>KilimanJoe {item.title}</p>
            <p className={styles.cardAddress}>{item.street}</p>
            <p className={styles.cardAddress}>{item.zip}</p>
          </div>
        );
      })}</div>
      
    </div>
  );
}
