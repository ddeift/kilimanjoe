import HeroBanner from "../components/hero-banner/hero-banner";
import Navbar from "../components/navbar/navbar";
import Cards from "../components/cards/cards";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import React, { useState } from "react";
import PrivacyProtection from "@/components/privacy-protection/privacy-protection";
import Impressum from "@/components/impressum/impressum";

export default function Home() {
  const [cookiesAgreed, setCookiesAgreed] = useState(false);
  const [privacyProtection, setPrivacyProtection] = useState(false);
  const [indexPage, setIndexPage] = useState(true);
  const [impressum, setImpressum] = useState(false);

  return (
    <div>
      <div id={"top"}></div>
      <Navbar
        cookiesAgreed={cookiesAgreed}
        setCookiesAgreed={setCookiesAgreed}
        setPrivacyProtection={setPrivacyProtection}
        setIndexPage={setIndexPage}
        setImpressum={setImpressum}
      />

      {indexPage && (
        <div>
          <HeroBanner />
          <Cards />
          <div id={"contact"}></div>
          <Contact
            setPrivacyProtection={setPrivacyProtection}
            setIndexPage={setIndexPage}
          />
        </div>
      )}

      {impressum && <Impressum />}

      {privacyProtection && <PrivacyProtection />}

      <Footer
        setPrivacyProtection={setPrivacyProtection}
        setIndexPage={setIndexPage}
        setImpressum={setImpressum}
      />
    </div>
  );
}
