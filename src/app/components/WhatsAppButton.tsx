"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <button onClick={() => {
      window.open('https://chat.whatsapp.com/E787EK0Gy1DLuE7RkD08mX', '_blank');
    }} className=" cursor-pointer pulse-button bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-lg md:text-xl px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 flex items-center justify-center gap-3">
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={32}
        height={32}
        className="flex-shrink-0"
      />
      <span>
        Entre no grupo<br />e tenha acesso as ofertas
      </span>
    </button>
  );
} 