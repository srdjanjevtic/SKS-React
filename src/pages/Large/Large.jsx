import { useEffect, useState } from "react";
import { useShippers } from "../../contexts/shippersContext";

import { motion } from "framer-motion";
import { slideUpVariants } from "../../slideUpVariants";

const Large = () => {
  const [mass, setMass] = useState(51);
  const [error, setError] = useState(null);
  const [aks, setAks] = useState({});
  const [dex, setDex] = useState({});
  const [city, setCity] = useState({});

  const [showReport, setShowReport] = useState(false);
  const [hideRadio, setHideRadio] = useState(false);

  const [extraOtpremnina, setExtraOtpremnina] = useState(false);
  const [extraPovratnica, setExtraPovratnica] = useState(false);
  const [extraOdgovor, setExtraOdgovor] = useState(false);
  const [extraOtpremnica, setExtraOtpremnica] = useState(false);
  const [extraSms, setextraSms] = useState(false);
  const { aksPrices, dexPrices, cityPrices, aksExtra, dexExtra, cityExtra } =
    useShippers();

  // extra
  const extra =
    extraOdgovor ||
    extraOtpremnica ||
    extraOtpremnina ||
    extraPovratnica ||
    extraSms;

  // sorted data
  const sortedByPriceAsc = [aks, dex, city]
    .filter((shipper) => shipper.price != undefined)
    .sort((a, b) => a.price - b.price);

  // otpremnina
  const aksExtraOtpremninaPercent = extraOtpremnina ? aksExtra["Otkupnina"] : 0;
  const aksExtraOtpremninaFix = extraOtpremnina
    ? aksExtra["Minimalna otkupnina"]
    : 0;
  const dexExtraOtpremninaPercent = extraOtpremnina ? dexExtra["Otkupnina"] : 0;
  const dexExtraOtpremninaFix = extraOtpremnina
    ? dexExtra["Minimalna otkupnina"]
    : 0;
  const cityExtraOtpremninaPercent = extraOtpremnina
    ? cityExtra["Otkupnina"]
    : 0;
  const cityExtraOtpremninaFix = extraOtpremnina
    ? cityExtra["Minimalna otkupnina"]
    : 0;

  // povratnica
  const aksExtraPovratnica = extraPovratnica
    ? aksExtra["Potvrda o uručenju pošiljke (Povratnica)"]
    : 0;
  const dexExtraPovratnica = extraPovratnica
    ? dexExtra["Potvrda o uručenju pošiljke (Povratnica)"]
    : 0;
  const cityExtraPovratnica = extraPovratnica
    ? cityExtra["Potvrda o uručenju pošiljke (Povratnica)"]
    : 0;

  // odgovor
  const aksExtraOdgovor = extraOdgovor ? aksExtra["Plaćeni odgovor"] : 0;
  const dexExtraOdgovor = extraOdgovor ? dexExtra["Plaćeni odgovor"] : 0;
  const cityExtraOdgovor = extraOdgovor ? cityExtra["Plaćeni odgovor"] : 0;

  // otpremnica
  const aksExtraOtpremnica = extraOtpremnica
    ? aksExtra["Povrat potpisane otpremnice (dokumentacije)"]
    : 0;
  const dexExtraOtpremnica = extraOtpremnica
    ? dexExtra["Povrat potpisane otpremnice (dokumentacije)"]
    : 0;
  const cityExtraOtpremnica = extraOtpremnica
    ? cityExtra["Povrat potpisane otpremnice (dokumentacije)"]
    : 0;

  // sms
  const aksExtraSms = extraSms ? aksExtra["SMS potvrda o uručenju"] : 0;
  const dexExtraSms = extraSms ? dexExtra["SMS potvrda o uručenju"] : 0;
  const cityExtraSms = extraSms ? cityExtra["SMS potvrda o uručenju"] : 0;

  const handleChooseLarge = () => {
    if (mass < 51 || mass > 1000) {
      setError(true);
      return;
    }
    const a = aksPrices && aksPrices.filter((item) => item["50"]);
    const aKg = aksPrices && aksPrices.filter((item) => item["kg"]);
    a.length > 0 &&
      setAks({
        price: a[0]["50"] + aKg[0]["kg"] * (mass - 50),
        otpremninaPercent: extraOtpremnina && aksExtraOtpremninaPercent,
        otpremninaFix: extraOtpremnina && aksExtraOtpremninaFix,
        povratnica: extraPovratnica && aksExtraPovratnica,
        odgovor: extraOdgovor && aksExtraOdgovor,
        otpremnica: extraOtpremnica && aksExtraOtpremnica,
        sms: extraSms && aksExtraSms,
        package: "preko 50 kg",
        shipper: "Aks",
      });
    const c70 = cityPrices && cityPrices.filter((item) => item["70"]);
    const c100 = cityPrices && cityPrices.filter((item) => item["100"]);
    const cKg = cityPrices && cityPrices.filter((item) => item["kg"]);
    setCity({
      price:
        mass > 100
          ? c100[0]["100"] + cKg[0]["kg"] * (mass - 100)
          : mass > 70
          ? c100[0]["100"]
          : c70[0]["70"],
      otpremninaPercent: extraOtpremnina && cityExtraOtpremninaPercent,
      otpremninaFix: extraOtpremnina && cityExtraOtpremninaFix,
      povratnica: extraPovratnica && cityExtraPovratnica,
      odgovor: extraOdgovor && cityExtraOdgovor,
      otpremnica: extraOtpremnica && cityExtraOtpremnica,
      sms: extraSms && cityExtraSms,
      package: "preko 50 kg",
      shipper: "City",
    });
    const d = dexPrices && dexPrices.filter((item) => item["50"]);
    const dKg = dexPrices && dexPrices.filter((item) => item["kg"]);
    d.length > 0 &&
      setDex({
        price: d[0]["50"] + dKg[0]["kg"] * (mass - 50),
        otpremninaPercent: extraOtpremnina && dexExtraOtpremninaPercent,
        otpremninaFix: extraOtpremnina && dexExtraOtpremninaFix,
        povratnica: extraPovratnica && dexExtraPovratnica,
        odgovor: extraOdgovor && dexExtraOdgovor,
        otpremnica: extraOtpremnica && dexExtraOtpremnica,
        sms: extraSms && dexExtraSms,
        package: "preko 50 kg",
        shipper: "Dex",
      });
    setShowReport(true);
    setHideRadio(true);
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (mass > 50 && mass < 1001) {
      setError(false);
    } else {
      setError(true);
    }
  }, [mass]);

  return (
    <motion.div
      className="content"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {!hideRadio && (
        <>
          <section className="large">
            <button
              className="minus minus10"
              onClick={() => setMass((prev) => prev - 10)}
            >
              {" "}
              -10{" "}
            </button>
            <button
              className="minus"
              onClick={() => setMass((prev) => prev - 1)}
            >
              {" "}
              -1{" "}
            </button>
            <input
              disabled
              type="number"
              min="51"
              max="1000"
              value={mass}
              onKeyDown={(e) => e.preventDefault()}
              onChange={(e) => {
                setMass(Number(e.target.value));
              }}
            />
            <button
              className="plus"
              onClick={() => setMass((prev) => prev + 1)}
            >
              {" "}
              +1{" "}
            </button>
            <button
              className="plus plus10"
              onClick={() => setMass((prev) => prev + 10)}
            >
              {" "}
              +10{" "}
            </button>
          </section>
          <section className="checkboxes-wrapper">
            <h3>Dodatne usluge</h3>
            <div className="checkboxes">
              <div className="checkbox-wrapper">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={extraOtpremnina}
                    onChange={() => setExtraOtpremnina((prev) => !prev)}
                    className={extraOtpremnina ? "checked" : ""}
                  />
                  <span>Pošiljka sa otpremninom</span>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={extraPovratnica}
                    onChange={() => setExtraPovratnica((prev) => !prev)}
                    className={extraPovratnica ? "checked" : ""}
                  />
                  <span>Pošiljka sa povratnicom</span>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={extraOdgovor}
                    onChange={() => setExtraOdgovor((prev) => !prev)}
                    className={extraOdgovor ? "checked" : ""}
                  />
                  <span>Pošiljka sa plaćenim odgovorom</span>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={extraOtpremnica}
                    onChange={() => setExtraOtpremnica((prev) => !prev)}
                    className={extraOtpremnica ? "checked" : ""}
                  />
                  <span>Pošiljka sa otpremnicom</span>
                </label>
              </div>
              <div className="checkbox-wrapper">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={extraSms}
                    onChange={() => setextraSms((prev) => !prev)}
                    className={extraSms ? "checked" : ""}
                  />
                  <span>SMS potvrda o uručenju</span>
                </label>
              </div>
            </div>
          </section>
          <button className="choose-btn" onClick={handleChooseLarge}>
            {error && (
              <p className="error">
                Masa pošiljke ne sme biti manja od 51kg niti veća od 1 tone!
              </p>
            )}
            IZABERI
          </button>
        </>
      )}
      {showReport && (
        <>
          <motion.div
            className="report-header"
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div>
              {extra && <span>Uz dodatne usluge:</span>}
              <ul>
                <li>{extraOtpremnina && "otpremnina"}</li>
                <li>{extraPovratnica && "povratnica"}</li>
                <li>{extraOdgovor && "plaćeni odgovor"}</li>
                <li>{extraOtpremnica && "otpremnica"}</li>
                <li>{extraSms && "SMS"}</li>
              </ul>
            </div>
            <h2>
              Slanje pošiljke mase <span>{mass}</span>kg koštalo bi:
            </h2>
          </motion.div>
          <section className="standard-report">
            <div className="report-body">
              {sortedByPriceAsc.map((shipper, index) => (
                <div key={index} className="report-container">
                  <div className="shipper-info">
                    <h2>{shipper.shipper}</h2>
                    <span className="remark">{shipper?.remark}</span>
                  </div>
                  <span className="total">
                    <span className="price">
                      {(
                        shipper.price +
                        Math.max(
                          (shipper.price * (1 + shipper.otpremninaPercent),
                          shipper.price + shipper.otpremninaFix) - shipper.price
                        ) +
                        shipper.povratnica +
                        shipper.odgovor +
                        shipper.otpremnica
                      ).toFixed(0)}
                    </span>{" "}
                    RSD
                  </span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </motion.div>
  );
};

export default Large;
