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
const HeartSVG = ({ size = 20, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 21s-7.333-4.873-9.2-7.02C1.36 11.9 2 7.333 6.4 5.4 8.6 4.4 11 5.2 12 7c1-1.8 3.4-2.6 5.6-1.6 4.4 1.933 5.04 6.5 3.6 8.58C19.333 16.127 12 21 12 21z" />
  </svg>
);

const ChatSVG = ({ size = 20, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PlusSVG = ({ size = 10, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

/* Premium SVIP Text Styles */
const svipStyles = {
  SVIP7: "bg-gradient-to-r from-[#fce7a2] to-[#d7a631] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,220,120,0.6)]",
  SVIP6: "bg-gradient-to-r from-[#ff5a5a] to-[#b30000] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,90,90,0.45)]",
  SVIP5: "bg-gradient-to-r from-[#ffb46a] to-[#ff7b22] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,150,70,0.45)]",
  SVIP4: "bg-gradient-to-r from-[#c48cff] to-[#8d2bff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(180,120,255,0.45)]",
  SVIP3: "bg-gradient-to-r from-[#ff9a3a] to-[#c06400] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,130,40,0.45)]",
  SVIP2: "bg-gradient-to-r from-[#3ab0ff] to-[#0d72ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(60,150,255,0.45)]",
  SVIP1: "bg-gradient-to-r from-[#25d37a] to-[#009944] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,210,120,0.45)]",
};

/* DATA */
const ROWS = [
  {
    level: "SVIP1",
    badge: svip1Badge,
    leftGradient: "linear-gradient(90deg,#2fc6a8,#82e07f)",
    rightGradient: "linear-gradient(90deg,#2fc6a8,#82e07f)",
    specialGold: false,
  },
  {
    level: "SVIP2",
    badge: svip2Badge,
    leftGradient: "linear-gradient(90deg,#0f85ff,#3ad0ff)",
    rightGradient: "linear-gradient(90deg,#0f85ff,#3ad0ff)",
    specialGold: false,
  },
  {
    level: "SVIP3",
    badge: svip3Badge,
    leftGradient: "linear-gradient(90deg,#ff8a00,#ffbf5a)",
    rightGradient: "linear-gradient(90deg,#ff8a00,#ffbf5a)",
    specialGold: false,
  },
  {
    level: "SVIP4",
    badge: svip4Badge,
    leftGradient: "linear-gradient(90deg,#a04bff,#ce8cff)",
    rightGradient: "linear-gradient(90deg,#a04bff,#ce8cff)",
    specialGold: false,
  },
  {
    level: "SVIP5",
    badge: svip5Badge,
    leftGradient: "linear-gradient(90deg,#ff4b3a,#ff8a4b)",
    rightGradient: "linear-gradient(90deg,#ff4b3a,#ff8a4b)",
    specialGold: false,
  },
  {
    level: "SVIP6",
    badge: svip6Badge,
    leftGradient: "linear-gradient(90deg,#8b0f0f,#c01212)",
    rightGradient: "linear-gradient(90deg,#8b0f0f,#c01212)",
    specialGold: false,
  },
  {
    level: "SVIP7",
    badge: svip7Badge,
    leftGradient: "linear-gradient(90deg,#c89a2b,#e6c36a)",
    rightGradient: "linear-gradient(90deg,#c89a2b,#e6c36a)",
    specialGold: true,
  },
];

/* Pill Component with centered plus inside heart */
function Pill({ gradient, variant = "heart", special = false, ariaLabel }) {
  return (
    <button
      aria-label={ariaLabel}
      className="w-full min-w-[110px] sm:min-w-[160px] h-12 sm:h-14 px-3 rounded-full transition-transform hover:scale-[1.02] focus:outline-none"
      style={{
        background: gradient,
        border: special ? "2px solid rgba(255, 205, 90, 0.95)" : "2px solid rgba(255,255,255,0.08)",
        boxShadow: special ? "0 8px 28px rgba(255,190,50,0.14)" : "0 6px 18px rgba(0,0,0,0.2)",
      }}
    >
      {/* full pill centering container */}
      <div className="relative w-full flex items-center justify-center">
        {/* icon wrapper: fixed size so icon stays centered */}
        <div className="relative flex items-center justify-center w-8 h-8">
          {variant === "heart" ? (
            <>
              {/* Heart background */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <HeartSVG size={20} color="#fff" />
              </div>

              {/* Centered plus on top of heart */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* choose plus color: white or gold for special */}
                <div style={{ width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <PlusSVG size={10} color={special ? "#F2D98A" : "#fff"} />
                </div>
              </div>
            </>
          ) : (
            <ChatSVG size={20} color="#fff" />
          )}
        </div>
      </div>
    </button>
  );
}

/* Left badge (badge + premium label underneath) */
const LeftBadge = ({ src, level }) => (
  <div className="flex flex-col items-center justify-center">
    <img src={src} alt={level} className="w-12 h-12 rounded-full object-contain" />
    <div className={`mt-1 text-xs sm:text-sm font-extrabold tracking-wide ${svipStyles[level]}`}>
      {level}
    </div>
  </div>
);

/* Page component: ALWAYS three columns per row (badge | heart pill | chat pill) */
export default function ExclusiveIcon() {
  return (
    <div className="min-h-screen bg-[#0e0b1d] text-white px-4 py-6">
      <div className="max-w-[1100px] mx-auto rounded-2xl border border-[#caa97d] p-4 sm:p-6">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={leftArrow} alt="left" className="w-5 h-5 opacity-90" />
          <h2 className="text-lg sm:text-2xl font-semibold tracking-wide">Exclusive icon</h2>
          <img src={rightArrow} alt="right" className="w-5 h-5 opacity-90" />
        </div>

        <div className="rounded-xl bg-gradient-to-b from-[#14121a] to-[#0f0e13] p-3 sm:p-6 border border-white/5">
          {/* ALWAYS 3 COLUMNS */}
          <div className="grid gap-3">
            {ROWS.map((r) => (
              <div key={r.level} className="grid grid-cols-3 items-center gap-3 py-2">
                {/* BADGE */}
                <div className="flex items-center justify-center sm:justify-start px-2">
                  <LeftBadge src={r.badge} level={r.level} />
                </div>

                {/* HEART PILL */}
                <div className="flex items-center justify-center px-2">
                  <Pill gradient={r.leftGradient} variant="heart" special={r.specialGold} ariaLabel={`${r.level} heart`} />
                </div>

                {/* CHAT PILL */}
                <div className="flex items-center justify-center px-2">
                  <Pill gradient={r.rightGradient} variant="chat" special={r.specialGold} ariaLabel={`${r.level} chat`} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom special SVIP7 wide gold panels */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center justify-center">
          
            </div>

          
         
          </div>
        </div>
      </div>
    </div>
  );
}
