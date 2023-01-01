import React from 'react';
import { useRecoilState } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';
import Moon from '../../assets/icons/Moon';
import { css } from '@emotion/react';
import Sun from '../../assets/icons/Sun';
import Colors from '../../assets/colors/Colors';

function DarkModeButton() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtoms);
  const colors = Colors();
  const iconSize = 40;

  return (
    <span
      onClick={() => setDarkMode((prev) => !prev)}
      css={css({
        color: colors.fontColor,
        '&:hover': {
          cursor: 'pointer',
        },
      })}
    >
      {darkMode ? <Sun size={iconSize} /> : <Moon size={iconSize} />}
    </span>
  );
}

export default DarkModeButton;
