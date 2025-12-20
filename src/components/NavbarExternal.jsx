// src/components/NavbarExternal.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarExternal({
  tabs = ["SVIP1","SVIP2","SVIP3","SVIP4","SVIP5","SVIP6","SVIP7"]
}) {
  return (
    <nav className="w-full overflow-x-hidden mt-10">
      <div className="overflow-x-auto scrollbar-hide">
        <ul
          className="flex gap-4 px-4 py-3 items-center whitespace-nowrap
                     bg-gradient-to-b from-[#070612] via-[#0c0b16] to-[#0b0a12]
                     w-max"
        >
          {tabs.map((t, index) => {
            const path = `/svip/${index + 1}`; // ✅ CORRECT

            return (
              <li key={t}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `px-4 py-1.5 rounded-full text-sm font-semibold transition
                    ${
                      isActive
                        ? "bg-gradient-to-r from-green-400 to-green-500 text-black shadow-lg"
                        : "text-gray-300/90 hover:text-white"
                    }`
                  }
                >
                  {t}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
