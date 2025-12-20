// src/pages/ExclusiveMedal.jsx
import React from "react";

// replace these with your actual medal images
import medal1 from "../assets/img/medal.png";
import medal2 from "../assets/img/medal.png";
import medal3 from "../assets/img/medal.png";
import medal4 from "../assets/img/medal.png";
import medal5 from "../assets/img/medal.png";
import medal6 from "../assets/img/medal.png";

import leftArrow from "../assets/img/left-arrow.png";
import rightArrow from "../assets/img/right-arrow.png";

/**
 * Medal card with animated crystal (glow, pulse, shine)
 */
const MedalCard = ({ img, label }) => {
  return (
    <div className="relative rounded-xl bg-gradient-to-b from-[#2f2a4a] to-[#241f3a] p-4 sm:p-6 flex flex-col items-center shadow-inner border border-white/5 overflow-visible">
      {/* Centered top ribbon + crystal wrapper */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <div className="w-12 h-2 bg-[#e6c79b] rounded-t-md" />
        {/* crystal container */}
        <div className="relative w-5 h-5 -mt-1">
          {/* the diamond itself */}
          <div
            className="w-full h-full bg-[#7c47ff] rotate-45 rounded-sm shadow-md crystal-glow crystal-pulse"
            style={{ transformOrigin: "50% 50%" }}
            aria-hidden
          />
          {/* shine overlay (uses ::before in CSS but applied on wrapper) */}
          <div className="crystal-shine rounded-sm" />
        </div>
      </div>

      {/* Medal image */}
      <div className="w-[84px] h-[84px] sm:w-[110px] sm:h-[110px] flex items-center justify-center mt-2">
        <img src={img} alt={label} className="max-w-full max-h-full object-contain" />
      </div>

      {/* Label */}
      <div className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200 text-center">
        {label}
      </div>
    </div>
  );
};

const medals = [
  { id: 1, img: medal1, label: "SVIP7 Medal" },
  { id: 2, img: medal2, label: "SVIP6 Medal" },
  { id: 3, img: medal3, label: "SVIP5 Medal" },
  { id: 4, img: medal4, label: "SVIP4 Medal" },
  { id: 5, img: medal5, label: "SVIP3 Medal" },
  { id: 6, img: medal6, label: "SVIP2 Medal" },
];

export default function ExclusiveMedal() {
  return (
    <div className="min-h-screen bg-[#0e0b1d] text-white px-4 py-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Title box */}
        <div className="mt-3 border border-[#caa97d] rounded-2xl p-4 sm:p-6 relative bg-[#111217]">
          <div className="flex items-center justify-center gap-4">
            <img src={leftArrow} alt="left" className="w-5 h-5 opacity-90" />
            <h2 className="text-xl font-semibold tracking-wide">Exclusive Medal</h2>
            <img src={rightArrow} alt="right" className="w-5 h-5 opacity-90" />
          </div>

          {/* Inside content */}
          <div className="mt-6 rounded-xl bg-gradient-to-b from-[#2a2746] to-[#241c3d] p-4 sm:p-6 border border-white/5">
            {/* Grid of medals */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 bg-[#25224f] p-4 rounded-xl">
              {medals.map((m) => (
                <MedalCard key={m.id} img={m.img} label={m.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
