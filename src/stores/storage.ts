import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';
export const storage = new MMKV({
  id: 'app-storage',
  encryptionKey: 'secure-key',
});
export const zustandStorage: StateStorage = {
  setItem: (name, value) => {

    storage.set(name, JSON.stringify(value));
  },
  getItem: (name) => {
    const value = storage.getString(name);
    try {
      return JSON.parse(value ?? '');
    } catch (error) {
      console.warn(`Failed to parse stored value for key "${name}":`, error);
      return null;
    }
  },
  removeItem: (name) => {
    storage.delete(name);
  },
};
export default zustandStorage;
