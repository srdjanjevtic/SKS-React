import Card from "../../components/Card/Card";
import { useShippers } from "../../contexts/shippersContext";

import { motion } from "framer-motion";
import { slideUpVariants } from "../../slideUpVariants";

const CardList = () => {
  const { shipperAks, shipperBex, shipperDex, shipperPost, shipperCity } =
    useShippers();
  const shippers = [
    shipperAks,
    shipperBex,
    shipperDex,
    shipperPost,
    shipperCity,
  ];

  return (
    <motion.div
      className="content"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="shippers-container">
        <h2>Kurirske službe</h2>
        <div className="card-container">
          {shippers &&
            shippers.map((shipper) => (
              <Card key={shipper.name} shipper={shipper} />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CardList;
