import { useContext, createContext, useState, useEffect } from "react";
import info from "../data/info.json";
import priceList from "../data/priceList.json";
import extra from "../data/extra.json";
import special from "../data/special.json";

const ShippersContext = createContext();

export function useShippers() {
  return useContext(ShippersContext);
}

export const ShippersProvider = ({ children }) => {
  const [shipperAks, setShipperAks] = useState({});
  const [shipperBex, setShipperBex] = useState({});
  const [shipperCity, setShipperCity] = useState({});
  const [shipperDex, setShipperDex] = useState({});
  const [shipperPost, setShipperPost] = useState({});

  const [aksPrices, setAksPrices] = useState({});
  const [bexPrices, setBexPrices] = useState({});
  const [dexPrices, setDexPrices] = useState({});
  const [postPrices, setPostPrices] = useState({});
  const [cityPrices, setCityPrices] = useState({});

  const [aksExtra, setAksExtra] = useState({});
  const [bexExtra, setBexExtra] = useState({});
  const [dexExtra, setDexExtra] = useState({});
  const [postExtra, setPostExtra] = useState({});
  const [cityExtra, setCityExtra] = useState({});

  const [specialCargo, setSpecialCargo] = useState({});

  useEffect(() => {
    setShipperAks(info[0].aks);
    setShipperBex(info[1].bex);
    setShipperDex(info[2].dex);
    setShipperPost(info[3].post);
    setShipperCity(info[4].city);
  }, []);

  useEffect(() => {
    setAksPrices(priceList.aks);
    setBexPrices(priceList.bex);
    setDexPrices(priceList.dex);
    setPostPrices(priceList.post);
    setCityPrices(priceList.city);
  }, []);

  useEffect(() => {
    setAksExtra(extra[0].aks);
    setBexExtra(extra[1].bex);
    setDexExtra(extra[2].dex);
    setCityExtra(extra[3].city);
    setPostExtra(extra[4].post);
  }, []);

  useEffect(() => {
    setSpecialCargo(special);
  }, []);

  return (
    <ShippersContext.Provider
      value={{
        shipperAks,
        shipperBex,
        shipperCity,
        shipperDex,
        shipperPost,
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
        specialCargo,
      }}
    >
      {children}
    </ShippersContext.Provider>
  );
};
