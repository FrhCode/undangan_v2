import dateFormat from "@/utils/date-format";

type Args = {
  URL: string;
  to: string;
  D_Day: Date;
  D_DayTime: string;
  D_DayLocation: string;
  Reception: Date;
  ReceptionTime: string;
  ReceptionLocation: string;
};
export default function generateMessage({
  URL,
  to,
  D_Day,
  D_DayTime,
  D_DayLocation,
  Reception,
  ReceptionTime,
  ReceptionLocation,
}: Args) {
  const text = `Bismillahirrahmanirrahim
	Assalamu'alaikum Warahmatullahi Wabarakatuh.
	
	Yth. ${to}
	
	Maha suci Allah yang telah menjadikan segala sesuatu lebih indah dan sempurna.
	
	Izinkan kami mengundang Bapak/Ibu/Sahabat sekalian untuk dapat menghadiri acara pernikahan kami.
	
	Rosyida
	 💍 
	Rizky Irmawan
	
	Insya Allah akad akan dilaksanakan pada :
	🗓️ ${dateFormat(D_Day)}
	⏰ ${D_DayTime}
	🏠 ${D_DayLocation}
	
	Dan Resepsi dilaksanakan pada :
	🗓️ ${dateFormat(Reception)}
	⏰ ${ReceptionTime}
	🏠 ${ReceptionLocation}
	
	📜Link undangan :
	 ${URL}
	
	Kehadiran, doa dan restu anda semua adalah kado terindah bagi kami. Tiada yang dapat kami ungkapkan selain rasa terima kasih dari hati yang tulus dan dalam.
	Jangan lupa menggunakan protokol kesehatan dengan memakai masker
	Wassalamua'alaikum Warahmatullahi Wabarakatuh.
	
	Kami yang berbahagia,
	
	Rizky & Rosyida beserta keluarga`;

  return text.replace(/\t/g, "");
}
