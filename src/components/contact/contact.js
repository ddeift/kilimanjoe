"use client";

import styles from "./contact.module.scss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link"


export default function Contact({setPrivacyProtection, setIndexPage}) {
  // eslint-disable-next-line no-unused-vars
  // const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState();
  const [showPostModal, setShowPostModal] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  function turnOffModal() {
    setShowPostModal(true);
    const timer = setTimeout(() => setShowPostModal(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    data.tel = phone;

    fetch("/api/contactHome", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        // setSubmitted(true);
        resetField("firstName");

        resetField("email");
        resetField("tel");
        resetField("message");

        clearForm();
        turnOffModal();
      }
    });
  };

  function clearForm() {
    document.getElementById("contactform").reset();
  }

  return (
    <div className={styles.mainContainer}>
      {showPostModal && (
        <h4 className={styles.confirmMes}>Nachricht gesendet</h4>
      )}
      <form id="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={styles.field}>
            <label htmlFor="firstName">{`${"Dein Name (Pflichtfeld)"}`}</label>
            <input
              className={styles.input}
              {...register("firstName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
            />
            {errors.firstName?.type === "required" && "Name benötigt"}
            {errors.firstName?.type === "pattern" && "Nur Buchstaben"}
            {errors.firstName?.type === "maxLength" && "maximal 30 Zeichen"}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="email">{`${"Deine Email (Pflichtfeld)"}`}</label>
          <input
            className={styles.input}
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === "required" && "Email benötigt"}
          {errors.email?.type === "pattern" && "Email Adresse Fehler"}
        </div>
        <div className={styles.field}>
          <label htmlFor="tel">Deine Telefon Nr.</label>
          <PhoneInput
            inputStyle={{
              background: "#f2f0f0",
              border: "none",
              borderBottom: "none",
              width: "354px",
              height: " 40px",
              borderRadius: "1px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 5px 6px -6px inset, rgba(0, 0, 0, 0.3) 0px 9px 9px -9px inset",
            }}
            buttonStyle={{ background: "none", border: "none" }}
            enableLongNumbers="true"
            autoFormat="true"
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </div>

        <div>
          <div className={styles.field}>
            <label htmlFor="message">Deine Nachricht</label>
            <textarea
              className={styles.message}
              {...register("message", { required: true, maxLength: 500 })}
            />
            {errors.message?.type === "required" && "Nachricht erforderlich"}
            {errors.message?.type === "maxLength" && "maximal 500 Zeichen"}

            <div className={styles.privacyContainer}>
              <input
                type="checkbox"
                defaultChecked={privacyChecked}
                onChange={(e) => {
                  setPrivacyChecked(e.target.checked);
                }}
              />
              <div>
                <p className={styles.privacyText}>
                  {`Hier mit stimme ich den `}
                  <Link
                    className={styles.dataProText}
                    onClick={() => {
                      setIndexPage(false);
                      setPrivacyProtection(true);
                    }}
                    href="#top"
                  >
                    Datenschutzbestimmungen
                  </Link>
                  {` zu. (Pflichtfeld)`}
                </p>
              </div>
            </div>

            {privacyChecked ? (
              <button type="submit" className={styles.send}>
                Senden
              </button>
            ) : (
              <button type="submit" disabled className={styles.disabled}>
                Senden
              </button>
            )}
          </div>
        </div>
      </form>
      <div>
        <p className={styles.contactTitle}>Kontaktinformation</p>
        <p className={styles.infoTextTitle}>KilimanJoe GmbH</p>
        <p className={styles.infoText}>Kurfürstenstraße 79</p>
        <p className={styles.infoText}>10787 Berlin</p>
        {/* <a className={styles.infoText} href="mailto:kilimanjoe@gmx.de">
          kilimanjoe@gmx.de
        </a> */}
        {/* <p className={styles.infoText}>+49 30 213 000 551</p> */}
      </div>
    </div>
  );
}
