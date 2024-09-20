import {
  BrowserRouter as router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="*" element={<AnimatedRoutes />} />
    </Routes>
  );
}

export default App;
