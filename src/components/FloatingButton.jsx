// src/components/FloatingButton.jsx
import React from "react";

export default function FloatingButton({ icon, size = 60 }) {
  return (
    <div
      className="rounded-full border-4 border-[#ffffff70] shadow-xl flex items-center justify-center cursor-pointer"
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle, #ffad34 0%, #ff7b00 100%)",
      }}
    >
      <img
        src={icon}
        alt="floating icon"
        className="w-[55%] h-[55%] object-contain drop-shadow-md"
      />
    </div>
  );
}
