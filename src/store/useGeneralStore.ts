import {create} from 'zustand';

interface GeneralType {
  isDarkMode: boolean;
}

interface GeneralStore extends GeneralType {
  setDarkMode: (values: boolean) => void;
}

export const defaultGeneralValues = {
  isDarkMode: false,
};

const useGeneralStore = create<GeneralStore>((set, get) => ({
  ...defaultGeneralValues,
  setDarkMode: (values: boolean) => set({...get(), isDarkMode: values}),
}));

export default useGeneralStore;
