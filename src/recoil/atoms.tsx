import { atom } from 'recoil';

export const darkModeAtoms = atom<boolean>({
  key: 'darkModeAtoms',
  default: JSON.parse(localStorage.getItem('darkMode') ?? 'false'),
});
