import { useRecoilValue } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';

function Colors() {
  const darkMode = useRecoilValue(darkModeAtoms);

  const colors = {
    background: darkMode
      ? 'linear-gradient(112.68deg, #000000 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.6) 100%)'
      : 'linear-gradient(112.68deg, #FFFACC 0%, #FFFFFF 100%);',
    fontColor: darkMode ? '#FFFFFF' : '#000000',
  };

  return colors;
}

export default Colors;
