import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import zustandStorage from './storage';

export interface FormStateStore {
  activeForm: 0 | 1 | 2;
  fullName: string;
  contactNumber: string;
  email: string;
  option: 'yes' | 'no' | '';
  setActiveForm: (form: 0 | 1 | 2) => void;
  setFullName: (name: string) => void;
  setContactNumber: (number: string) => void;
  setEmail: (email: string) => void;
  setOption: (option: 'yes' | 'no' | '') => void;
  resetFormState: () => void;
}

export const useFormState = create<FormStateStore>()(
  persist(
    (set) => ({
      activeForm: 0,
      fullName: '',
      contactNumber: '',
      email: '',
      option: '',
      setActiveForm: (form) => set({ activeForm: form }),
      setFullName: (name) => set({ fullName: name }),
      setContactNumber: (number) => set({ contactNumber: number }),
      setEmail: (email) => set({ email }),
      setOption: (option) => set({ option }),
      resetFormState: () => set({
        activeForm: 0,
        fullName: '',
        contactNumber: '',
        email: '',
        option: '',
      }),
    }),
    {
      name: 'form-state-storage',
      storage: zustandStorage,
    }
  )
);
