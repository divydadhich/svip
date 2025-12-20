// src/components/PrivilegeCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivilegeCard({ title, image, badge, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <div
      onClick={handleClick}
      className="
        relative
        w-full
        aspect-square
        bg-[#0b0f1d]
        rounded-2xl
        p-3 sm:p-5
        border border-[#FFD700]
        shadow-md
        overflow-hidden
        flex flex-col
        cursor-pointer
        transition-all duration-200
        active:scale-95
        
      "
    >
      {/* Badge */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 w-10 h-10 sm:w-14 sm:h-14">
        <img
          src={badge}
          alt="badge"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Inner border */}
      <div className="absolute inset-0 rounded-2xl border border-[#fff7e5] opacity-30 pointer-events-none" />

      {/* Icon */}
      <div className="mt-10 sm:mt-12">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-md"
        />
      </div>

      {/* Title */}
      <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-left text-[#D2B48C] leading-tight">
        {title}
      </p>
    </div>
  );
}
