import { create } from 'zustand';
import ITheme from '../interfaces/ITheme';

interface ThemeStore {
  selectedTheme: ITheme | null;
  setSelectedTheme: (theme: ITheme | null) => void;
  removeSelectedTheme: () => void,
}

const useThemeStore = create<ThemeStore>((set) => ({
  selectedTheme: null,
  setSelectedTheme: (theme) => set({ selectedTheme: theme }),
  removeSelectedTheme: () => set({ selectedTheme: null }),
}));

export default useThemeStore;
