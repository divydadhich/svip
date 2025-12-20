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
      className="relative w-full aspect-square bg-[#0b0f1d]
                 rounded-2xl p-5 border border-[#ffffff30]
                 shadow-md overflow-hidden
                 flex flex-col items-start
                 cursor-pointer
                 hover:scale-[1.03]
                 hover:border-amber-400
                 transition-all duration-200
                 h-55"
    >
      {/* Badge */}
      <div className="absolute top-3 left-3 z-20 w-14 h-14">
        <img
          src={badge}
          alt="badge"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Inner border */}
      <div className="absolute inset-0 rounded-2xl border border-[#fff7e5] opacity-30 pointer-events-none"></div>

      {/* Icon (LEFT aligned) */}
      <div className="w-full flex justify-start mt-10">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-contain drop-shadow-md"
        />
      </div>

      {/* Title (LEFT aligned) */}
      <p className="text-[#D2B48C] text-lg mt-4 text-left">
        {title}
      </p>
    </div>
  );
}
