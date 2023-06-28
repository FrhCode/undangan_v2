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
  setIsInvitations: (boolean) =>
    set((state) => ({ isInvitationOpen: boolean })),
  setMusicState: (boolean) => set((state) => ({ isInvitationOpen: boolean })),
}));

export default useStore;
