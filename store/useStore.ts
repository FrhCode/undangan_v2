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
  D_DayLocation: "Pinrang Masolo-sulawesi selatan",
  Reception: new Date(2023, 6, 23),
  ReceptionTime: "09.00 - 12.00 WIT",
  ReceptionLocation: "Tarakan Kalimantan Utara",
  setIsInvitations: (data) => set((state) => ({ isInvitationOpen: data })),
  setMusicState: (data) => set((state) => ({ musicState: data })),
}));

export default useStore;
