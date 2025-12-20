import React from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import svipBadge from "../assets/svip1.png";
import bigCardImage from "../assets/bigcardimg.png";

export default function SVIPExchangeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex justify-center overflow-y-auto px-4 py-10">

      <div className="relative w-full max-w-[600px] bg-[#0b0f1d] rounded-2xl p-4 text-white">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-white"
        >
          <FiX />
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-3">SVIP</h2>

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
              <h3 className="text-3xl font-bold text-[#009c43]">SVIP1</h3>
              <p className="mt-3 text-black flex items-center gap-2 font-medium">
                <span className="text-sm">Consume 4000000 points to unlock</span>
              </p>
            </div>

            {/* Badge */}
            <div className="flex justify-end">
              <img
                src={svipBadge}
                className="w-28 h-28 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Exchange Title */}
        <div className="flex items-center justify-center my-4 text-lg font-medium">
          <FiChevronLeft className="text-[#d9c59b]" />
          <span className="mx-3 text-[#D2B48C]">Exchange</span>
          <FiChevronRight className="text-[#d9c59b]" />
        </div>

        {/* Score Box */}
        <div className="border border-[#f5d6a1] rounded-2xl p-5 mb-6 relative">

          {/* decorative corners */}
          <span className="absolute -top-2 left-4 text-[#f5d6a1] text-xl">✤</span>
          <span className="absolute -top-2 right-4 text-[#f5d6a1] text-xl">✤</span>
          <span className="absolute -bottom-2 left-4 text-[#f5d6a1] text-xl">✤</span>
          <span className="absolute -bottom-2 right-4 text-[#f5d6a1] text-xl">✤</span>

          <p className="text-lg text-[#D2B48C]">My scores:</p>
          <p className="text-5xl font-md mt-1 ">0</p>
        </div>

        {/* Tip Section */}
        <div className="mb-6">
          <p className="text-[#D2B48C] mb-1">tip:</p>
          <p className="text-[#D2B48C] leading-relaxed">
            After redemption, the remaining points will be reset to zero.
          </p>
        </div>

        {/* Recharge Button */}
        <button className="w-full py-4 rounded-2xl bg-gray-700 text-center font-semibold text-white border border-gray-500">
          Recharge to get SVIP points
        </button>
      </div>
    </div>
  );
}
