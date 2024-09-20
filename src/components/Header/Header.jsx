import { NavLink } from "react-router-dom";
import { useRef } from "react";

import { motion } from "framer-motion";

const Header = () => {
  const navRef = useRef();

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", type: "tween" }}
    >
      <div className="nav">
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle"
          ref={navRef}
        />
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={() => (navRef.current.checked = false)}>
                Danas za Sutra
              </NavLink>
            </li>
            <li>
              <NavLink
                to="special"
                onClick={() => (navRef.current.checked = false)}
              >
                nestandardne pošiljke
              </NavLink>
            </li>
            <li>
              <NavLink
                to="info"
                onClick={() => (navRef.current.checked = false)}
              >
                Kuriri
              </NavLink>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </div>
    </motion.header>
  );
};

export default Header;
