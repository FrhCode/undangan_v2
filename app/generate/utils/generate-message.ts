export default function generateMessage(URL: string, to: string) {
  const text = `Bismillahirrahmanirrahim
	Assalamu'alaikum Warahmatullahi Wabarakatuh.
	
	Yth. ${to}
	
	Maha suci Allah yang telah menjadikan segala sesuatu lebih indah dan sempurna.
	
	Izinkan kami mengundang Bapak/Ibu/Sahabat sekalian untuk dapat menghadiri acara pernikahan kami.
	
	Rosyida
	 💍 
	Rizky Irmawan
	
	Insya Allah akan dilaksanakan pada :
	🗓️ Akad : Rabu 05 Juli 2023
	⏰ Pukul : 09.00 - Selesai WIT
	
	📜Link undangan :
	 ${URL}
	
	Kehadiran, doa dan restu anda semua adalah kado terindah bagi kami. Tiada yang dapat kami ungkapkan selain rasa terima kasih dari hati yang tulus dan dalam.
	Jangan lupa menggunakan protokol kesehatan dengan memakai masker
	Wassalamua'alaikum Warahmatullahi Wabarakatuh.
	
	Kami yang berbahagia,
	
	Rizky & Rosyida beserta keluarga`;

  return text.replace(/\t/g, "");
}
