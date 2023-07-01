export default function generateMessage(URL: string) {
  const text = `Bismillahirrahmanirrahim
	Assalamu'alaikum Warahmatullahi Wabarakatuh.
	
	Yth. Keluarga besar GreenFox
	
	Maha suci Allah yang telah menjadikan segala sesuatu lebih indah dan sempurna.
	
	Izinkan kami mengundang Bapak/Ibu/Sahabat sekalian untuk dapat menghadiri acara pernikahan kami.
	
	Tiara Syida
	 💍 
	Rizky Irmawan
	
	Insya Allah akan dilaksanakan pada :
	🗓️ Ahad, 21 Februari 2023
	⏰ Akad : 07.00-09.00 WIB 
	⏰ Resepsi : 09.00 - Selesai WIB
	
	📜Link undangan :
	 ${URL}
	
	Kehadiran, doa dan restu anda semua adalah kado terindah bagi kami. Tiada yang dapat kami ungkapkan selain rasa terima kasih dari hati yang tulus dan dalam.
	
	Jangan lupa menggunakan protokol kesehatan dengan memakai masker
	
	Wassalamua'alaikum Warahmatullahi Wabarakatuh.
	
	
	Kami yang berbahagia,
	
	Rizky & Tiarabeserta keluarga`;

  return text.replace(/\t/g, "");
}
