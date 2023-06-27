import { create } from "zustand";

interface StoreState {
  isInvitationOpen: boolean;
  setIsInvitations: (boolean: boolean) => void;
}

const useStore = create<StoreState>()((set) => ({
  isInvitationOpen: false,
  setIsInvitations: (boolean) =>
    set((state) => ({ isInvitationOpen: boolean })),
}));

export default useStore;
