// src/layouts/SVIPLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarExternal from "../components/NavbarExternal";
import Header from "../pages/Header";

export default function SVIPLayout() {
  const location = useLocation();

  // Show external SVIP navbar ONLY on /svip/{number}
  const showExternalNav = /^\/svip\/\d+$/.test(location.pathname);

  return (
    <div>
      {/* Common header for all SVIP pages */}
      <Header title="SVIP" />

      {/* SVIP level navigation */}
      {showExternalNav && <NavbarExternal />}

      {/* Page content */}
      <Outlet />
    </div>
  );
}
