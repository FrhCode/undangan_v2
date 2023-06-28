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
  title: "Undangan Pernikahan Rizki Irmawan S.Ag dan Rosyida S.Ak",
  description:
    "Acara Akad pukul 9 wit hari rabu tgl 5 juli 2023 di Pinrang Masolo-sulawesi selatan ( resepsi tagl 23 juli 2023 di tarakan kaltarw)",
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
