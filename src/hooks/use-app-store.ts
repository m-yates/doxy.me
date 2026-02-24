import { create } from "zustand";

interface AppStore {
  currentUser: string | null;
  setCurrentUser: (user: string | null) => void;
  hasVideo: boolean;
  setHasVideo: (hasVideo: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  currentUser: "patient",
  setCurrentUser: (user) => set({ currentUser: user }),
  hasVideo: true,
  setHasVideo: (hasVideo) => set({ hasVideo })
}));
