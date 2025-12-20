// src/components/Navbar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// replace with your actual assets
import icon1 from "../assets/img/pngtree-golden.png";
import icon2 from "../assets/img/pngtree-golden.png";
import icon3 from "../assets/img/pngtree-golden.png";
import icon4 from "../assets/img/pngtree-golden.png";
import icon5 from "../assets/img/pngtree-golden.png";
import icon6 from "../assets/img/pngtree-golden.png";
import icon7 from "../assets/img/pngtree-golden.png";

const icons = [
  { src: icon1, alt: "Special Broadcast", to: "/svip/1" },
  { src: icon2, alt: "Exclusive Medal", to: "/medals" },
  { src: icon3, alt: "Exclusive Icon", to: "/icons" },
  { src: icon4, alt: "Page 4", to: "/page4" },
  { src: icon5, alt: "Page 5", to: "/page5" },
  { src: icon6, alt: "Page 6", to: "/page6" },
  { src: icon7, alt: "Page 7", to: "/page7" },
];

export default function Navbar() {
  const navigate = useNavigate();

  const handleClick = (e, to, idx) => {
    e.preventDefault();
    console.log(`Navbar icon clicked: idx=${idx}, to=${to}`);
    // navigate programmatically
    navigate(to);
  };

  return (
    <nav className="w-full bg-[#0e0b1d] mt-10">
      <div className="flex justify-center gap-6 py-4">
        {icons.map((ic, idx) => (
          // keep NavLink for active styling, but intercept clicks and use navigate (robust)
          <NavLink
            key={idx}
            to={ic.to}
            onClick={(e) => handleClick(e, ic.to, idx + 1)}
            className={({ isActive }) =>
              `inline-flex items-center justify-center p-1 rounded-md transition-transform transform hover:scale-105 focus:outline-none ${
                isActive ? "ring-2 ring-amber-400/60" : ""
              }`
            }
            title={ic.alt}
            aria-label={ic.alt}
          >
            <img
              src={ic.src}
              alt={ic.alt}
              className="w-14 h-14 object-contain drop-shadow-lg cursor-pointer"
            />
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
