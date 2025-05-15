// useTheme.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import zustandStorage from './storage';
import { darkColors, lightColors } from '@constants/colors';

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: 'theme-storage',
      storage: zustandStorage,
    }
  )
);

// derived selector
export const useThemeColors = () => {
  const isDark = useThemeStore((state) => state.isDark);
  return isDark ? darkColors : lightColors;
};

export default useThemeStore;
