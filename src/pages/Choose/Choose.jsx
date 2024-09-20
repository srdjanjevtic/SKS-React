import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShippers } from "../../contexts/shippersContext";

import { motion } from "framer-motion";
import { slideUpVariants } from "../../slideUpVariants";

const Choose = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const { aksPrices, bexPrices, dexPrices, postPrices, cityPrices } =
    useShippers();

  const [aks, setAks] = useState({});
  const [bex, setBex] = useState({});
  const [dex, setDex] = useState({});
  const [post, setPost] = useState({});
  const [city, setCity] = useState({});
  const [postParcel, setPostParcel] = useState({});
  const [postPP, setPostPP] = useState({});

  return (
    <motion.div
      className="content"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="choose">
        <div className="selected">Izaberi vrstu paketa</div>
        <div className="radio">
          <div className="options-container">
            <label className="option">
              <input type="radio" name="choose-radio" />
              <span
                onClick={() => {
                  setSelected("standard");
                  navigate("/standard");
                }}
              >
                Standardni (do 50kg)
              </span>
            </label>
            <label className="option">
              <input type="radio" name="choose-radio" />
              <span
                onClick={() => {
                  setSelected("large");
                  navigate("/large");
                }}
              >
                Veliki (preko 50kg)
              </span>
            </label>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Choose;
