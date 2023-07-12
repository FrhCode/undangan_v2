import clsx from "clsx";
import "./globals.css";
import { Dancing_Script, Poppins } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--dancing-script",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata = {
  title: "Undangan Pernikahan Rizqi Maulana S.Kom dan Intansha Rifani",
  description:
    "Acara Akad pukul 9 WIB hari Sabtu tgl 16 September 2023 di Jl. Cikutra No.237, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40124",
  openGraph: {
    title: "Undangan Pernikahan Rizqi Maulana S.Kom dan Intansha Rifani",
    description:
      "Acara Akad pukul 9 WIB hari Sabtu tgl 16 September 2023 di Jl. Cikutra No.237, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40124",
    images: "https://www.shaqi.wedding.farhandev.cloud/next.svg",
    url: "https://www.shaqi.wedding.farhandev.cloud/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          `${dancingScript.variable} ${poppins.variable} overflow-hidden scroll-smooth font-sans`,
          {
            "debug-screens": process.env.NODE_ENV !== "production",
          }
        )}
      >
        {children}
      </body>
    </html>
  );
}
