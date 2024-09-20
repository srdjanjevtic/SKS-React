import { useEffect, useState } from "react";
import { useShippers } from "../../contexts/shippersContext";

import { motion } from "framer-motion";
import { slideUpVariants } from "../../slideUpVariants";

const Standard = () => {
  const [standard, setStandard] = useState("");
  const [error, setError] = useState("");
  const [aks, setAks] = useState({});
  const [bex, setBex] = useState({});
  const [dex, setDex] = useState({});
  const [post, setPost] = useState({});
  const [city, setCity] = useState({});
  const [postParcel, setPostParcel] = useState({});
  const [postPP, setPostPP] = useState({});
  const [showReport, setShowReport] = useState(false);
  const [hideRadio, setHideRadio] = useState(false);
  const [extraOtpremnina, setExtraOtpremnina] = useState(false);
  const [extraPovratnica, setExtraPovratnica] = useState(false);
  const [extraOdgovor, setExtraOdgovor] = useState(false);
  const [extraOtpremnica, setExtraOtpremnica] = useState(false);
  const [extraSms, setextraSms] = useState(false);

  // imported data from shippers context
  const {
    aksPrices,
    bexPrices,
    dexPrices,
    postPrices,
    cityPrices,
    aksExtra,
    bexExtra,
    dexExtra,
    postExtra,
    cityExtra,
  } = useShippers();

  // extra flag
  const extra =
    extraOdgovor ||
    extraOtpremnica ||
    extraOtpremnina ||
    extraPovratnica ||
    extraSms;

  // sorted data
  const sortedByPriceAsc = [aks, bex, dex, post, city, postPP, postParcel]
    .filter((shipper) => shipper.price != undefined)
    .sort((a, b) => a.price - b.price);

  // otpreminina
  const aksExtraOtpremninaPercent = extraOtpremnina ? aksExtra["Otkupnina"] : 0;
  const aksExtraOtpremninaFix = extraOtpremnina
    ? aksExtra["Minimalna otkupnina"]
    : 0;
  const bexExtraOtpremninaPercent = extraOtpremnina ? bexExtra["Otkupnina"] : 0;
  const bexExtraOtpremninaFix = extraOtpremnina
    ? bexExtra["Minimalna otkupnina"]
    : 0;
  const dexExtraOtpremninaPercent = extraOtpremnina ? dexExtra["Otkupnina"] : 0;
  const dexExtraOtpremninaFix = extraOtpremnina
    ? dexExtra["Minimalna otkupnina"]
    : 0;
  const postExtraOtpremninaPercent = extraOtpremnina
    ? postExtra["Otkupnina"]
    : 0;
  const postExtraOtpremninaFix = extraOtpremnina
    ? postExtra["Minimalna otkupnina"]
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
  const bexExtraPovratnica = extraPovratnica
    ? bexExtra["Potvrda o uručenju pošiljke (Povratnica)"]
    : 0;
  const dexExtraPovratnica = extraPovratnica
    ? dexExtra["Potvrda o uručenju pošiljke (Povratnica)"]
    : 0;
  const postExtraPovratnica = extraPovratnica
    ? postExtra["Potvrda o uručenju pošiljke (Povratnica)"]
    : 0;
  const cityExtraPovratnica = extraPovratnica
    ? cityExtra["Potvrda o uručenju pošiljke (Povratnica)"]
    : 0;

  // odgovor
  const aksExtraOdgovor = extraOdgovor ? aksExtra["Plaćeni odgovor"] : 0;
  const bexExtraOdgovor = extraOdgovor ? bexExtra["Plaćeni odgovor"] : 0;
  const dexExtraOdgovor = extraOdgovor ? dexExtra["Plaćeni odgovor"] : 0;
  const cityExtraOdgovor = extraOdgovor ? cityExtra["Plaćeni odgovor"] : 0;
  const postExtraOdgovor = extraOdgovor ? postExtra["Plaćeni odgovor"] : 0;

  // otpremnica
  const aksExtraOtpremnica = extraOtpremnica
    ? aksExtra["Povrat potpisane otpremnice (dokumentacije)"]
    : 0;
  const bexExtraOtpremnica = extraOtpremnica
    ? bexExtra["Povrat potpisane otpremnice (dokumentacije)"]
    : 0;
  const dexExtraOtpremnica = extraOtpremnica
    ? dexExtra["Povrat potpisane otpremnice (dokumentacije)"]
    : 0;
  const cityExtraOtpremnica = extraOtpremnica
    ? cityExtra["Povrat potpisane otpremnice (dokumentacije)"]
    : 0;
  const postExtraOtpremnica = extraOtpremnica
    ? postExtra["Povrat potpisane otpremnice (dokumentacije)"]
    : 0;

  // sms
  const aksExtraSms = extraSms ? aksExtra["SMS potvrda o uručenju"] : 0;
  const bexExtraSms = extraSms ? bexExtra["SMS potvrda o uručenju"] : 0;
  const dexExtraSms = extraSms ? dexExtra["SMS potvrda o uručenju"] : 0;
  const cityExtraSms = extraSms ? cityExtra["SMS potvrda o uručenju"] : 0;
  const postExtraSms = extraSms ? postExtra["SMS potvrda o uručenju"] : 0;

  const handleChooseStandard = () => {
    if (standard) {
      setError(false);
      const a = aksPrices && aksPrices.filter((item) => item[standard]);
      a.length > 0 &&
        setAks({
          price: a[0][standard],
          otpremninaPercent: extraOtpremnina && aksExtraOtpremninaPercent,
          otpremninaFix: extraOtpremnina && aksExtraOtpremninaFix,
          povratnica: extraPovratnica && aksExtraPovratnica,
          odgovor: extraOdgovor && aksExtraOdgovor,
          otpremnica: extraOtpremnica && aksExtraOtpremnica,
          sms: extraSms && aksExtraSms,
          package: standard,
          shipper: "Aks Express",
        });
      const b = bexPrices && bexPrices.filter((item) => item[standard]);
      b.length > 0 &&
        setBex({
          price: b[0][standard],
          otpremninaPercent: extraOtpremnina && bexExtraOtpremninaPercent,
          otpremninaFix: extraOtpremnina && bexExtraOtpremninaFix,
          povratnica: extraPovratnica && bexExtraPovratnica,
          odgovor: extraOdgovor && bexExtraOdgovor,
          otpremnica: extraOtpremnica && bexExtraOtpremnica,
          sms: extraSms && bexExtraSms,
          package: standard,
          shipper: "Bex Express",
        });
      const c = cityPrices && cityPrices.filter((item) => item[standard]);
      c.length > 0 &&
        setCity({
          price: c[0][standard],
          otpremninaPercent: extraOtpremnina && cityExtraOtpremninaPercent,
          otpremninaFix: extraOtpremnina && cityExtraOtpremninaFix,
          povratnica: extraPovratnica && cityExtraPovratnica,
          odgovor: extraOdgovor && cityExtraOdgovor,
          otpremnica: extraOtpremnica && cityExtraOtpremnica,
          sms: extraSms && cityExtraSms,
          package: standard,
          shipper: "City Express",
        });
      const d = dexPrices && dexPrices.filter((item) => item[standard]);
      d.length > 0 &&
        setDex({
          price: d[0][standard],
          otpremninaPercent: extraOtpremnina && dexExtraOtpremninaPercent,
          otpremninaFix: extraOtpremnina && dexExtraOtpremninaFix,
          povratnica: extraPovratnica && dexExtraPovratnica,
          odgovor: extraOdgovor && dexExtraOdgovor,
          otpremnica: extraOtpremnica && dexExtraOtpremnica,
          sms: extraSms && dexExtraSms,
          package: standard,
          shipper: "Dex Express",
        });
      const p = postPrices && postPrices.filter((item) => item[standard]);
      p.length > 0 &&
        setPost({
          price: p[0][standard]["by7pm"],
          otpremninaPercent: extraOtpremnina && postExtraOtpremninaPercent,
          otpremninaFix: extraOtpremnina && postExtraOtpremninaFix,
          povratnica: extraPovratnica && postExtraPovratnica,
          odgovor: extraOdgovor && postExtraOdgovor,
          otpremnica: extraOtpremnica && postExtraOtpremnica,
          sms: extraSms && postExtraSms,
          package: standard,
          shipper: "Post Express",
          remark: "do 19:00 na kućnu adresu",
        });
      p.length > 0 &&
        setPostParcel({
          price: p[0][standard]["parcel"],
          otpremninaPercent: extraOtpremnina && postExtraOtpremninaPercent,
          otpremninaFix: extraOtpremnina && postExtraOtpremninaFix,
          povratnica: extraPovratnica && postExtraPovratnica,
          odgovor: extraOdgovor && postExtraOdgovor,
          otpremnica: extraOtpremnica && postExtraOtpremnica,
          sms: extraSms && postExtraSms,
          package: standard,
          shipper: "Post Express",
          remark: "na paketomatu",
        });
      p.length > 0 &&
        setPostPP({
          price: p[0][standard]["pp"],
          otpremninaPercent: extraOtpremnina && postExtraOtpremninaPercent,
          otpremninaFix: extraOtpremnina && postExtraOtpremninaFix,
          povratnica: extraPovratnica && postExtraPovratnica,
          odgovor: extraOdgovor && postExtraOdgovor,
          otpremnica: extraOtpremnica && postExtraOtpremnica,
          sms: extraSms && postExtraSms,
          package: standard,
          shipper: "Post Express",
          remark: "na šalteru pošte",
        });
      setShowReport(true);
      setHideRadio(true);
      globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [standard]);

  return (
    <motion.div
      className="content"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {!hideRadio && (
        <div className="standard-container">
          <section className="standard">
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("0")}>do 0.5kg</span>
            </label>
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("1")}>do 1.0kg</span>
            </label>
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("2")}>do 2.0kg</span>
            </label>
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("5")}>do 5.0kg</span>
            </label>
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("10")}>do 10kg</span>
            </label>
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("15")}>do 15kg</span>
            </label>
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("20")}>do 20kg</span>
            </label>
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("30")}>do 30kg</span>
            </label>
            <label className="option">
              <input type="radio" name="standard-radio" />
              <span onClick={() => setStandard("50")}>do 50kg</span>
            </label>
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
          <button className="choose-btn" onClick={handleChooseStandard}>
            IZABERI
            {error && <p className="error">Niste izabrali masu paketa!</p>}
          </button>
        </div>
      )}
      {showReport && (
        <section className="standard-report">
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
              Slanje pošiljke mase do{" "}
              <span>{standard === "0" ? 0.5 : standard}</span>kg koštalo bi:
            </h2>
          </motion.div>
          <div className="report-body">
            {sortedByPriceAsc.map((shipper, index) => (
              <div key={index} className="report-container">
                <div className="shipper-info">
                  <h3 className="shipper">{shipper.shipper}</h3>
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
                      shipper.otpremnica +
                      shipper.sms
                    ).toFixed(0)}{" "}
                  </span>
                  RSD
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default Standard;
