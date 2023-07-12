import { create } from "zustand";

interface StoreState {
  isInvitationOpen: boolean;
  musicState: boolean;
  D_Day: Date;
  D_DayTime: string;
  D_DayLocation: string;
  Reception: Date;
  ReceptionTime: string;
  ReceptionLocation: string;
  setIsInvitations: (boolean: boolean) => void;
  setMusicState: (boolean: boolean) => void;
}

const useStore = create<StoreState>()((set) => ({
  isInvitationOpen: false,
  musicState: false,
  D_Day: new Date(2023, 8, 16, 7, 30),
  D_DayTime: "07.30 - Selesai",
  D_DayLocation:
    "Jl. Cikutra No.237, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40124",
  Reception: new Date(2023, 8, 16),
  ReceptionTime: "09.30 - 13.30 WIB",
  ReceptionLocation:
    "Jl. Cikutra No.237, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40124",
  setIsInvitations: (data) => set((state) => ({ isInvitationOpen: data })),
  setMusicState: (data) => set((state) => ({ musicState: data })),
}));

export default useStore;
