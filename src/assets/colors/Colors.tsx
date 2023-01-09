import { useRecoilValue } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';
import { COLORS } from './Index';

function Colors() {
  const darkMode = useRecoilValue(darkModeAtoms);

  return {
    background: darkMode
      ? 'linear-gradient(to bottom right, #000000 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.6) 100%)'
      : `linear-gradient(to bottom right, ${COLORS.MINT} 0%, #FFFFFF 100%);`,
    fontColor: darkMode ? 'white' : 'black',
  };
}

export default Colors;
