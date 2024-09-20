import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CardList from "./CardList/CardList";
import Standard from "./Standard/Standard";
import Special from "./Special/Special";
import Large from "./Large/Large";
import NotFound from "./NotFound/NotFound";
import Choose from "./Choose/Choose";

import { AnimatePresence } from "framer-motion";
import MainLayout from "../layouts/MainLayout/MainLayout";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<MainLayout />} errorElement={<Error />}>
          <Route index element={<Choose />} />
          <Route path="info" element={<CardList />} />
          <Route path="standard" element={<Standard />} />
          <Route path="special" element={<Special />} />
          <Route path="large" element={<Large />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
