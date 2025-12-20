// src/pages/SpecialBroadcast.jsx
import React from "react";

import avatar from "../assets/img/PhotoshopExtension_Image.png";
import bg1 from "../assets/img/drg.avif";

import leftarrow from "../assets/img/left-arrow.png";
import rightarrow from "../assets/img/right-arrow.png";

/**
 * Optimized SpecialBroadcast with per-card light overlays
 * - Each card has its own subtle overlay color (very low alpha)
 * - Overlay placed below content so text remains readable
 * - Mobile/tablet-first to keep contrast high
 */

const BROADCASTS = [
  {
    level: "SVIP7",
    gradient: "from-[#f7a54f] to-[#d57b25]",
    bgImage: bg1,
    special: true,
    overlay: "rgba(255,215,0,0.06)", // gold
  },
  {
    level: "SVIP6",
    gradient: "from-[#ffe3c4] to-[#ffd4ab]",
    bgImage: bg1,
    overlay: "rgba(255,229,192,0.05)", // pale gold
  },
  {
    level: "SVIP5",
    gradient: "from-[#9a0000] to-[#ff6600]",
    bgImage: bg1,
    overlay: "rgba(255,80,20,0.06)", // warm red/orange
  },
  {
    level: "SVIP4",
    gradient: "from-[#3d0094] to-[#7d30ff]",
    bgImage: bg1,
    overlay: "rgba(125,50,255,0.05)", // purple
  },
  {
    level: "SVIP3",
    gradient: "from-[#a84e00] to-[#ffb342]",
    bgImage: bg1,
    overlay: "rgba(255,150,50,0.05)", // amber
  },
  {
    level: "SVIP2",
    gradient: "from-[#003a8f] to-[#0084ff]",
    bgImage: bg1,
    overlay: "rgba(60,130,255,0.05)", // blue
  },
  {
    level: "SVIP1",
    gradient: "from-[#006633] to-[#00cc66]",
    bgImage: bg1,
    overlay: "rgba(30,200,120,0.05)", // green
  },
];

export default function SpecialBroadcast() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0a17] to-[#0e0b1d] text-white px-4 py-6">
      {/* small animations (minimal) */}
      <style>{`
        @keyframes goldShimmer { 0% {background-position:0% 50%} 100% {background-position:100% 50%} }
        @keyframes cardEntrance { 0% { transform: translateY(10px); opacity: 0 } 100% { transform: translateY(0); opacity: 1 } }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe-animate { animation: none !important; }
        }
      `}</style>

      {/* Title with arrows */}
      <div className="flex items-center justify-center gap-3 my-3">
        <button
          aria-label="Previous"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/6 hover:bg-white/10 transition"
        >
          <img src={leftarrow} alt="left" className="w-5 h-5" />
        </button>

        <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight">
          <span className="block text-center">Special <span className="inline-block">Broadcast</span></span>
        </h1>

        <button
          aria-label="Next"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/6 hover:bg-white/10 transition"
        >
          <img src={rightarrow} alt="right" className="w-5 h-5" />
        </button>
      </div>

      {/* Cards container */}
      <div className="max-w-[1100px] mx-auto flex flex-col gap-4 mt-4">
        {BROADCASTS.map((item, idx) => {
          const delay = `${idx * 60}ms`;
          return (
            <article
              key={item.level}
              aria-label={`${item.level} broadcast`}
              className={`relative rounded-2xl overflow-hidden text-white shadow-xl
                ${item.special ? "p-5 sm:p-6" : "p-4 sm:p-5"}
                transition-transform duration-200 hover:scale-[1.007] focus-within:scale-[1.007] motion-safe-animate`}
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02)), url(${item.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
                animation: `cardEntrance 420ms cubic-bezier(.16,.9,.39,1) ${delay} both`,
              }}
            >
              {/* Per-card subtle colored overlay (LIGHT) - below content */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, ${item.overlay}, rgba(0,0,0,0.04))`,
                  mixBlendMode: "overlay",
                }}
              />

              {/* SVIP top-right (above overlay) */}
              <div className="absolute right-3 top-3 z-30 flex items-center">
                {item.special ? (
                  <span
                    className="font-extrabold"
                    style={{
                      fontSize: 18,
                      lineHeight: 1,
                      backgroundImage:
                        "linear-gradient(90deg,#ffe9a8 0%, #ffd36a 35%, #c08912 65%, #ffd36a 100%)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      textShadow: "0 3px 10px rgba(0,0,0,0.6)",
                      animation: "goldShimmer 2.2s linear infinite",
                    }}
                  >
                    {item.level}
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                    {item.level}
                  </span>
                )}
              </div>

              {/* Content (above overlay) */}
              <div className="relative z-20 grid grid-cols-[auto_1fr] gap-3 items-start">
                {/* Avatar */}
                <div className={`${item.special ? "w-14 h-14" : "w-12 h-12"} flex-shrink-0`}>
                  <img
                    src={avatar}
                    alt="avatar"
                    className="rounded-full border-2 border-white/12 w-full h-full object-cover shadow-md"
                  />
                </div>

                {/* Text content */}
                <div>
                  <div className="flex items-center gap-2">
                    {/* left small badge icon (placeholder) */}
                    <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-br from-[#ffd27a] to-[#ffb347] text-black text-xs shadow-sm">
                      ★
                    </div>

                    <h3 className="font-semibold text-sm sm:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                      XXX
                    </h3>

                    {/* right small badge icon */}
                    <div className="ml-1 w-5 h-5 flex items-center justify-center rounded-sm bg-gradient-to-br from-[#ffd27a] to-[#ffb347] text-black text-xs shadow-sm">
                      ✦
                    </div>
                  </div>

                  <p className="mt-1 text-xs sm:text-sm leading-snug opacity-95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    XXX is a chat & social app where people share moments and get attention. Premium members receive exclusive rewards.
                  </p>

                  {/* Badges */}
                  <div className="mt-3 flex flex-wrap gap-3 items-center">
                    <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        item.special ? "bg-gradient-to-r from-[#ffd36a] to-[#ffb347] text-black" : "bg-blue-500"
                      }`}
                      style={item.special ? { boxShadow: "0 8px 20px rgba(255,180,40,0.12)" } : {}}
                    >
                      <span>💎</span>
                      <span className="text-sm">{item.special ? "120" : "40"}</span>
                    </div>

                    <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        item.special ? "bg-green-300 text-black" : "bg-green-500"
                      }`}
                    >
                      <span>💰</span>
                      <span className="text-sm">{item.special ? "180" : "70"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action button */}
              <button
                aria-label={`Open ${item.level}`}
                className="absolute right-3 bottom-3 z-20 inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 px-3 py-2 rounded-lg text-sm transition"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-sm">Open</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M5 12h14" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l6 6-6 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
