// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

/* main site navbar */
import Navbar from "./components/Navbar";

/* layout with NavbarExternal */
import SVIPLayout from "./layouts/SVIPLayout";

/* pages */
import SVIPPage from "./pages/SVIPPage";
import SVIP2 from "./pages/SVIP2";

/* internal pages */
import SpecialBroadcast from "./Internal-pages/SpecialBroadcast";
import ExclusiveMedal from "./Internal-pages/ExclusiveMedal";
import ExclusiveIcon from "./Internal-pages/ExclusiveIcon";

function LayoutWrapper() {
  const location = useLocation();

  // hide main navbar on ALL svip pages
  const isSVIPRoute = location.pathname.startsWith("/svip");

  return (
    <>
      {!isSVIPRoute && <Navbar />}

      <Routes>
        {/* default */}
        <Route path="/" element={<Navigate to="/svip/1" replace />} />

        {/* SVIP layout */}
        <Route element={<SVIPLayout />}>
          <Route path="/svip/1" element={<SVIPPage />} />
          <Route path="/svip/2" element={<SVIP2 />} />

          {/* internal svip pages */}
          <Route path="/special-broadcast" element={<SpecialBroadcast />} />
          <Route path="/medals" element={<ExclusiveMedal />} />
          <Route path="/icons" element={<ExclusiveIcon />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/svip/1" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}
