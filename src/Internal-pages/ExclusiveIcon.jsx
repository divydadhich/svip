// src/pages/ExclusiveIcon.jsx
import React from "react";
import leftArrow from "../assets/img/left-arrow.png";
import rightArrow from "../assets/img/right-arrow.png";
import svip1Badge from "../assets/img/homebadge1.png";
import svip2Badge from "../assets/img/badge2.png";
import svip3Badge from "../assets/img/badge3.png";
import svip4Badge from "../assets/img/homebadge1.png";
import svip5Badge from "../assets/img/homebadge1.png";
import svip6Badge from "../assets/img/homebadge1.png";
import svip7Badge from "../assets/img/homebadge1.png";

/* Inline SVG Icons */
const HeartSVG = ({ size = 18, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21s-7.333-4.873-9.2-7.02C1.36 11.9 2 7.333 6.4 5.4 8.6 4.4 11 5.2 12 7c1-1.8 3.4-2.6 5.6-1.6 4.4 1.933 5.04 6.5 3.6 8.58C19.333 16.127 12 21 12 21z" />
  </svg>
);

const ChatSVG = ({ size = 18, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PlusSVG = ({ size = 9, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

/* Premium SVIP Text Styles */
const svipStyles = {
  SVIP7: "bg-gradient-to-r from-[#fce7a2] to-[#d7a631] bg-clip-text text-transparent",
  SVIP6: "bg-gradient-to-r from-[#ff5a5a] to-[#b30000] bg-clip-text text-transparent",
  SVIP5: "bg-gradient-to-r from-[#ffb46a] to-[#ff7b22] bg-clip-text text-transparent",
  SVIP4: "bg-gradient-to-r from-[#c48cff] to-[#8d2bff] bg-clip-text text-transparent",
  SVIP3: "bg-gradient-to-r from-[#ff9a3a] to-[#c06400] bg-clip-text text-transparent",
  SVIP2: "bg-gradient-to-r from-[#3ab0ff] to-[#0d72ff] bg-clip-text text-transparent",
  SVIP1: "bg-gradient-to-r from-[#25d37a] to-[#009944] bg-clip-text text-transparent",
};

/* DATA */
const ROWS = [
  { level: "SVIP1", badge: svip1Badge, leftGradient: "linear-gradient(90deg,#2fc6a8,#82e07f)", rightGradient: "linear-gradient(90deg,#2fc6a8,#82e07f)" },
  { level: "SVIP2", badge: svip2Badge, leftGradient: "linear-gradient(90deg,#0f85ff,#3ad0ff)", rightGradient: "linear-gradient(90deg,#0f85ff,#3ad0ff)" },
  { level: "SVIP3", badge: svip3Badge, leftGradient: "linear-gradient(90deg,#ff8a00,#ffbf5a)", rightGradient: "linear-gradient(90deg,#ff8a00,#ffbf5a)" },
  { level: "SVIP4", badge: svip4Badge, leftGradient: "linear-gradient(90deg,#a04bff,#ce8cff)", rightGradient: "linear-gradient(90deg,#a04bff,#ce8cff)" },
  { level: "SVIP5", badge: svip5Badge, leftGradient: "linear-gradient(90deg,#ff4b3a,#ff8a4b)", rightGradient: "linear-gradient(90deg,#ff4b3a,#ff8a4b)" },
  { level: "SVIP6", badge: svip6Badge, leftGradient: "linear-gradient(90deg,#8b0f0f,#c01212)", rightGradient: "linear-gradient(90deg,#8b0f0f,#c01212)" },
  { level: "SVIP7", badge: svip7Badge, leftGradient: "linear-gradient(90deg,#c89a2b,#e6c36a)", rightGradient: "linear-gradient(90deg,#c89a2b,#e6c36a)", specialGold: true },
];

/* Pill */
function Pill({ gradient, variant = "heart", special = false }) {
  return (
    <button
      className="
        w-full
        min-w-[90px] sm:min-w-[160px]
        h-10 sm:h-14
        rounded-full
        transition-transform
        active:scale-95
      "
      style={{
        background: gradient,
        border: special ? "2px solid rgba(255,205,90,.9)" : "2px solid rgba(255,255,255,.08)",
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
          {variant === "heart" ? (
            <>
              <HeartSVG />
              <div className="absolute">
                <PlusSVG color={special ? "#F2D98A" : "#fff"} />
              </div>
            </>
          ) : (
            <ChatSVG />
          )}
        </div>
      </div>
    </button>
  );
}

/* Left Badge */
const LeftBadge = ({ src, level }) => (
  <div className="flex flex-col items-center">
    <img src={src} alt={level} className="w-9 h-9 sm:w-12 sm:h-12 object-contain" />
    <div className={`mt-1 text-[10px] sm:text-sm font-bold ${svipStyles[level]}`}>
      {level}
    </div>
  </div>
);

/* PAGE */
export default function ExclusiveIcon() {
  return (
    <div className="min-h-screen bg-[#0e0b1d] text-white px-3 sm:px-4 py-6">
      <div className="max-w-[1100px] mx-auto rounded-2xl border border-[#caa97d] p-3 sm:p-6">

        {/* TITLE */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={leftArrow} className="w-4 sm:w-5" />
          <h2 className="text-base sm:text-2xl font-semibold">Exclusive icon</h2>
          <img src={rightArrow} className="w-4 sm:w-5" />
        </div>

        <div className="rounded-xl bg-gradient-to-b from-[#14121a] to-[#0f0e13] p-3 sm:p-6 border border-white/5">
          <div className="grid gap-2 sm:gap-3">
            {ROWS.map((r) => (
              <div key={r.level} className="grid grid-cols-3 items-center gap-2 sm:gap-3 py-2">

                <div className="flex justify-center sm:justify-start">
                  <LeftBadge src={r.badge} level={r.level} />
                </div>

                <div className="flex justify-center">
                  <Pill gradient={r.leftGradient} variant="heart" special={r.specialGold} />
                </div>

                <div className="flex justify-center">
                  <Pill gradient={r.rightGradient} variant="chat" special={r.specialGold} />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
