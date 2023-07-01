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
  D_Day: new Date(2023, 6, 5, 9),
  D_DayTime: "09.00 - 12.00 WIT",
  D_DayLocation:
    "Cv. Kinabalu jaya karoseri Jln. Poros Masolo - Teppo, Kec. Patampanua, Kab. Pinrang",
  Reception: new Date(2023, 6, 23),
  ReceptionTime: "09.00 - 12.00 WIT",
  ReceptionLocation:
    "Jl bhayangkara gang bersama 1 RT. 45 (sebelum perum darusalam (Paling depan), KOTA TARAKAN, TARAKAN BARAT, KALIMANTAN UTARA, ID, 77111",
  setIsInvitations: (data) => set((state) => ({ isInvitationOpen: data })),
  setMusicState: (data) => set((state) => ({ musicState: data })),
}));

export default useStore;
