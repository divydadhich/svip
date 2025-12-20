import React, { useState } from "react";
import { FiLock } from "react-icons/fi";

import SVIPInfoModal from "../components/SVIPInfoModal";
import SVIPExchangeModal from "../components/SVIPExchangeModal";
import PrivilegeCard from "../components/PrivilegeCard";
import FloatingButton from "../components/FloatingButton";
import Header from "./Header";

import svipBadge from "../assets/svip1.png";
import bigCardImage from "../assets/bigcardimg.png";

// privilege icons
import specialIcon from "../assets/special.png";
import medalIcon from "../assets/svip1.png";
import badge from "../assets/badge.png";

// floating icons
import float1 from "../assets/floating1.png";
import float2 from "../assets/floating2.png";

export default function SVIPPage() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [exchangeOpen, setExchangeOpen] = useState(false);

  return (
    <>
   
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <div onClick={() => setInfoOpen(true)}>
          <FloatingButton icon={float1} size={65} />
        </div>
        <div onClick={() => setExchangeOpen(true)}>
          <FloatingButton icon={float2} size={65} />
        </div>
      </div>

      {/* PAGE WITH FLUTTER GRADIENT BACKGROUND */}
      <div
        className="w-full min-h-screen flex justify-center"
        style={{
          background:
            "linear-gradient(180deg, #5D3EB1 10%, #484452 65%, #1F1D24 100%)",
        }}
      >
        <div
          className="origin-top scale-[0.85] md:scale-100 lg:scale-110"
          style={{ maxWidth: "480px" }}
        >
          <div className="px-4 py-6 text-white">

            {/* Big Card */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-amber-400 mb-6">
              <div
                className="flex items-center p-6"
                style={{
                  backgroundImage: `url(${bigCardImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col text-black">
                  <h3 className="text-3xl font-extrabold text-[#009c43]">
                    SVIP1
                  </h3>

                  <div className="flex items-center gap-2 my-3">
                    <FiLock size={18} />
                    <span>
                      Consume <strong>4,000,000</strong> points to unlock
                    </span>
                  </div>

                  <p>My scores:</p>
                  <p className="text-4xl font-extrabold">0</p>
                </div>

                <img
                  src={svipBadge}
                  className="w-44 h-44 object-contain drop-shadow-xl"
                  alt="SVIP Badge"
                />
              </div>
            </div>

            {/* Privileges */}
           <div className="grid grid-cols-2 gap-4">
  <PrivilegeCard
    title="Special Broadcast"
    image={specialIcon}
    badge={badge}
    to="/special-broadcast"
  />

  <PrivilegeCard
    title="Exclusive Medal"
    image={medalIcon}
    badge={badge}
    to="/special-broadcast"
  />

  <PrivilegeCard
    title="Exclusive Icon"
    image={medalIcon}
    badge={badge}
    to="/special-broadcast"
  />

  <PrivilegeCard
    title="Exclusive Headwear"
    image={medalIcon}
    badge={badge}
    to="/special-broadcast"
  />

  <PrivilegeCard
    title="Exclusive Headwear"
    image={medalIcon}
    badge={badge}
    to="/special-broadcast"
  />

  <PrivilegeCard
    title="Exclusive Headwear"
    image={medalIcon}
    badge={badge}
    to="/special-broadcast"
  />

  <PrivilegeCard
    title="Exclusive Headwear"
    image={medalIcon}
    badge={badge}
    to="/special-broadcast"
  />

  <PrivilegeCard
    title="Exclusive Headwear"
    image={medalIcon}
    badge={badge}
    to="/special-broadcast"
  />

  <PrivilegeCard
    title="Exclusive Headwear"
    image={medalIcon}
    badge={badge}
    to="/special-broadcast"
  />
</div>


          </div>
        </div>
      </div>

      {/* Modals */}
      <SVIPInfoModal open={infoOpen} onClose={() => setInfoOpen(false)} />
      <SVIPExchangeModal
        open={exchangeOpen}
        onClose={() => setExchangeOpen(false)}
      />
    </>
  );
}
