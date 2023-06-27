import Image from "next/image";
import React from "react";
import leaf from "@/public/leaf.png";

export default function Leaf1() {
  return (
    <div className="relative h-14 overflow-hidden bg-teal-50">
      <Image
        src={leaf}
        alt=""
        style={{
          filter:
            "invert(11%) sepia(66%) saturate(838%) hue-rotate(112deg) brightness(93%) contrast(63%)",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
