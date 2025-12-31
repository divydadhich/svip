import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";
import Header from "../pages/Header";
import svip1 from "../assets/svip1.png";

export default function SVIPInfoModal({ open, onClose }) {
   useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;
 

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto px-4 ">
      
      {/* Modal container */}
      <div className="relative w-full max-w-xl mx-auto bg-[#0b0f1d] text-white rounded-2xl border border-[#f5d6a1] mt-18 mb-8">

        {/* 🔥 HEADER AT TOP */}
        <div className="sticky top-0 z-10 bg-[#0b0f1d] rounded-t-2xl">
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
            {/* 3. SVIP Validity Period */}
<section className="mt-2">
  <h3 className="text-lg font-semibold text-yellow-400 mb-4">
    3. SVIP validity period
  </h3>

  <p className="text-[#D2B48C] leading-relaxed mb-5">
    The SVIP identity is valid for 90 days, and the expiration time
    is displayed on the SVIP page; The rules are as follows:
  </p>

  <ol className="list-decimal pl-5 space-y-4 text-[#D2B48C] leading-relaxed">
    <li>
      If SVIP points can be exchanged, they can be exchanged for a
      higher level SVIP identity, and its validity period will be
      reset to 90 days.
    </li>

    <li>
      After SVIP expires, if your SVIP points cannot be redeemed for
      any level, you will lose your SVIP status.
    </li>

    <li>
      Please be cautious when recharging. 4Party will not be able to
      process lost points.
    </li>
  </ol>
</section>



{/* 4. SVIP is frozen */}
<section>
  <h3 className="text-lg font-semibold text-yellow-400 mb-4 mt-3 ">
    4. SVIP is frozen
  </h3>

  <p className="text-[#D2B48C] leading-relaxed">
    Illegal refunds will be detected. After the detection, your SVIP
    will be frozen and the corresponding SVIP points will be deducted.
    Please contact the official for help.
  </p>
</section>

          </section>

        </div>
      </div>
    </div>
  );
}
