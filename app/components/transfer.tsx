import Reveal from "./reveal";
import RevealOpacity from "./reveal-opacity";

export default function Transfer(){
    return <section
        id="transfer"
        className="flex flex-col items-center justify-center space-y-4 bg-teal-50 p-8"
    >
    <div className="flex flex-col items-center justify-center space-y-2">
        <RevealOpacity>
          <p className="font-dancing-script text-3xl font-semibold text-teal-900">
            Kado Digital
          </p>
        </RevealOpacity>
        <div className=" h-0 w-36 border-t-2 border-solid border-teal-900"></div>
    </div>
    <div className="flex flex-col items-center justify-center space-y-1 rounded-lg bg-teal-700 p-8 text-white shadow-md w-full">
        <Reveal>
        <p className="text-center text-sm">Bank/Wallet</p>
        </Reveal>
        <Reveal>
        <p className="text-center text-lg mb-3">Bank Syariah Indonesia</p>
        </Reveal>
        <Reveal>
        <p className="text-center text-sm">Atas Nama</p>
        </Reveal>
        <Reveal>
        <p className="text-center text-lg mb-3">Intansha Rifani</p>
        </Reveal>
        <Reveal>
        <p className="text-center text-sm">Nomor Rekening</p>
        </Reveal>
        <Reveal>
        <p className="text-center text-lg mb-3">8923354740</p>
        </Reveal>
        <Reveal>
        <p className="text-center text-sm">Alamat</p>
        </Reveal>
        <Reveal>
        <p className="text-center text-sm">Jl. Wastukencana gang nangkasuni No.14 Rt03 Rw18, kelurahan tamansari, kecamatan Bandung Wetan</p>
        </Reveal>
  </div>
  </section>
}