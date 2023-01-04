import { useRecoilValue } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';
import { COLORS } from './Index';

function Colors() {
  const darkMode = useRecoilValue(darkModeAtoms);

  return {
    homeBackground: darkMode
      ? 'linear-gradient(112.68deg, #000000 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.6) 100%)'
      : `linear-gradient(112.68deg, ${COLORS.MINT} 0%, #FFFFFF 100%);`,
    basicBackground: darkMode ? 'black' : COLORS.LIGHT_MINT,
    fontColor: darkMode ? 'white' : 'black',
  };
}

export default Colors;
