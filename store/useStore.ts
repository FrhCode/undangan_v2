import { create } from "zustand";

interface StoreState {
  isInvitationOpen: boolean;
  musicState: boolean;
  setIsInvitations: (boolean: boolean) => void;
  setMusicState: (boolean: boolean) => void;
}

const useStore = create<StoreState>()((set) => ({
  isInvitationOpen: false,
  musicState: false,
  setIsInvitations: (data) => set((state) => ({ isInvitationOpen: data })),
  setMusicState: (data) => set((state) => ({ musicState: data })),
}));

export default useStore;
