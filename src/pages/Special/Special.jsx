import { useEffect, useState } from "react";
import { useShippers } from "../../contexts/shippersContext";

import { motion } from "framer-motion";
import { slideUpVariants } from "../../slideUpVariants";

const Special = () => {
  const { specialCargo } = useShippers();
  const [special, setSpecial] = useState(null);
  const [result, setResult] = useState(specialCargo[special]);

  const handleSelect = (e) => {
    const { nodeName, innerText } = e.target;
    if (nodeName === "SPAN") {
      setSpecial(innerText);
    }
  };

  useEffect(() => {
    setResult(specialCargo[special]);
  }, [special]);

  return (
    <motion.div
      className="special"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {!special && (
        <section onClick={handleSelect} className="special-container">
          <span>Auto motor</span>
          <span>Bačva od 209 litara</span>
          <span>Bicikl</span>
          <span>Branik</span>
          <span>Guma putnička</span>
          <span>Guma putnička sa felnom</span>
          <span>Guma poluteretna</span>
          <span>Guma poluteretna sa felnom</span>
          <span>Guma teretna</span>
          <span>Guma teretna sa felnom</span>
          <span>Guma traktorska</span>
          <span>Guma traktorska sa felnom</span>
          <span>Hauba</span>
          <span>Krilo</span>
          <span>Krov</span>
          <span>Menjač automatski</span>
          <span>Menjač manji</span>
          <span>Paleta</span>
          <span>Polustranica</span>
          <span>Prag</span>
          <span>Skuter/ManjiMotocikl</span>
          <span>Televizor do 55 inča</span>
          <span>Veći Motocikl</span>
          <span>Vrata</span>
        </section>
      )}
      {specialCargo[special] && specialCargo[special].length > 0 && (
        <motion.section
          className="special-report"
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>
            <span className="text">Cena dostave za: </span>
            <span className="article">{special}</span>
          </h2>
          {specialCargo[special].map((cargo, index) => (
            <div className="shippers" key={index}>
              {cargo.aks && (
                <p className="report-info">
                  <h2>Aks</h2> <span>{cargo?.aks}</span> RSD
                </p>
              )}
              {cargo.bex && (
                <p className="report-info">
                  <h2>Bex</h2> <span>{cargo?.bex}</span> RSD
                </p>
              )}
            </div>
          ))}
        </motion.section>
      )}
    </motion.div>
  );
};

export default Special;
