import React from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import svipBadge from "../assets/svip1.png";
import bigCardImage from "../assets/bigcardimg.png";

export default function SVIPExchangeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-[#0b0f1d] text-white overflow-y-auto">

      {/* ===== HEADER ===== */}
      <div className="sticky top-0 z-10 h-[56px] flex items-center justify-center border-b border-[#f5d6a1] bg-[#0b0f1d]">
        
        {/* BACK / CLOSE */}
        <button
          onClick={onClose}
          className="absolute left-4 text-white text-[20px]"
        >
          &lt;
        </button>
        <button
          onClick={onClose}
          className="absolute right-4 text-2xl text-white"
        >
          <FiX />
        </button>

        <h2 className="text-lg font-semibold">SVIP</h2>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="px-4 py-6 max-w-[430px] mx-auto">

        {/* Green Card */}
        <div
          className="rounded-2xl overflow-hidden border-2 border-[#f5d6a1] mb-6"
          style={{
            backgroundImage: `url(${bigCardImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-2 p-5">
            <div>
              <h3 className="text-3xl font-bold text-[#009c43]">
                SVIP1
              </h3>
              <p className="mt-3 text-black font-medium text-sm">
                Consume 4,000,000 points to unlock
              </p>
            </div>

            <div className="flex justify-end">
              <img
                src={svipBadge}
                className="w-28 h-28 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Exchange title */}
        <div className="flex items-center justify-center my-6 text-lg font-medium">
          <FiChevronLeft className="text-[#d9c59b]" />
          <span className="mx-3 text-[#D2B48C]">Exchange</span>
          <FiChevronRight className="text-[#d9c59b]" />
        </div>

        {/* Score Box */}
        <div className="border border-[#f5d6a1] rounded-2xl p-6 mb-6 relative text-center">
          <p className="text-lg text-[#D2B48C]">My scores:</p>
          <p className="text-5xl font-medium mt-2 text-[#D2B48C]">2345678</p>
        </div>

        {/* Tip */}
        <div className="mb-8">
          <p className="text-[#D2B48C] mb-1">Tip</p>
          <p className="text-[#D2B48C] leading-relaxed">
            After redemption, the remaining points will be reset to zero.
          </p>
        </div>

        {/* CTA */}
        <button className="w-full py-4 rounded-2xl bg-yellow-400 font-semibold border  text-black">
          Exchange
        </button>

      </div>
    </div>
  );
}