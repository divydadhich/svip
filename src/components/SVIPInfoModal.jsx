import React from "react";
import { FiX } from "react-icons/fi";
import Header from "../pages/Header";
import svip1 from "../assets/svip1.png";

export default function SVIPInfoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] overflow-y-auto">
      
      {/* Modal container */}
      <div className="relative w-full max-w-xl mx-auto bg-[#0b0f1d] text-white rounded-2xl border border-[#f5d6a1] mt-10">

        {/* 🔥 HEADER AT TOP */}
        <div className="sticky top-0 z-10 bg-[#0b0f1d] border-b border-[#f5d6a1] rounded-t-2xl">
          <Header title="SVIP" />

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={onClose}
          >
            <FiX />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-6">
          
          {/* 1. SVIP Points */}
          <section>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              1. SVIP Points
            </h3>
            <p className="text-[#D2B48C] leading-relaxed">
              Recharge 1 gold coin to get 1 SVIP point. Sufficient points can be
              exchanged for SVIP benefits. After exchange, the validity period
              is 90 days.
            </p>
          </section>

          {/* 2. SVIP Levels */}
          <section>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              2. SVIP Levels
            </h3>

            <div className="grid grid-cols-3 gap-6 place-items-center">
              {[
                ["SVIP1", "4,000,000", "text-green-400"],
                ["SVIP2", "+8,500,000", "text-blue-400"],
                ["SVIP3", "+19,500,000", "text-orange-400"],
                ["SVIP4", "+42,000,000", "text-purple-400"],
                ["SVIP5", "+97,000,000", "text-red-500"],
                ["SVIP6", "+100,000,000", "text-yellow-500"],
              ].map(([label, points, color]) => (
                <div key={label} className="flex flex-col items-center">
                  <img src={svip1} className="w-20 h-20 object-contain" />
                  <p className={`${color} mt-2`}>{label}</p>
                  <p className="text-[#D2B48C] text-sm">{points}</p>
                </div>
              ))}

              <div className="flex flex-col items-center col-span-3">
                <img src={svip1} className="w-28 h-28 object-contain" />
                <p className="text-yellow-300 mt-2">SVIP7</p>
                <p className="text-[#D2B48C] text-sm">+150,000,000</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
