import Image from "next/image";
import leaf2 from "@/public/leaf2.png";

export default function Leaf2() {
  return (
    <div className="relative flex h-14 justify-end overflow-hidden bg-teal-50">
      <Image
        src={leaf2}
        alt=""
        className="right-0"
        style={{
          filter:
            "invert(11%) sepia(66%) saturate(838%) hue-rotate(112deg) brightness(93%) contrast(63%)",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
