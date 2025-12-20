// src/components/PrivilegeCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivilegeCard1({
  title,
  image,
  badge,
  to,        // 👈 NEW: route path
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full aspect-square bg-[#0b0f1d]
                 rounded-2xl p-4 border border-[#ffffff30]
                 shadow-md overflow-hidden
                 flex flex-col items-center justify-center
                 cursor-pointer
                 hover:scale-[1.03]
                 hover:border-amber-400
                 transition-all duration-200"
    >
      {/* Floating badge (top-left) */}
      <div className="absolute top-3 left-3 z-20 w-14 h-14">
        <img
          src={badge}
          alt="badge"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Inner cream border */}
      <div className="absolute inset-0 rounded-2xl border border-[#fff7e5] opacity-30 pointer-events-none"></div>

      {/* Icon */}
      <div className="flex items-center justify-center w-full h-[70%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>

      {/* Title */}
      <p className="text-[#D2B48C] text-lg tracking-wide text-center mt-3 pb-1">
        {title}
      </p>
    </div>
  );
}
