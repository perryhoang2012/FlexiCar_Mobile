import {create} from 'zustand';

interface GeneralType {
  isDarkMode: boolean;
  isFirstTimeUsersApp: boolean;
}

interface GeneralStore extends GeneralType {
  setDarkMode: (values: boolean) => void;
  setIsFirstTimeUsersApp: (values: boolean) => void;
}

export const defaultGeneralValues = {
  isDarkMode: false,
  isFirstTimeUsersApp: true,
};

const useGeneralStore = create<GeneralStore>((set, get) => ({
  ...defaultGeneralValues,
  setDarkMode: (values: boolean) => set({...get(), isDarkMode: values}),
  setIsFirstTimeUsersApp: (values: boolean) =>
    set({...get(), isFirstTimeUsersApp: values}),
}));

export default useGeneralStore;
