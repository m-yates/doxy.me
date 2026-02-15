import { create } from "zustand";

interface AppStore {
  currentUser: string | null;
  setCurrentUser: (user: string | null) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user })
}));
