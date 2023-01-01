import React from 'react';
import { useRecoilState } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';
import Moon from '../../assets/icons/Moon';
import { css } from '@emotion/react';
import Sun from '../../assets/icons/Sun';

function DarkModeButton() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtoms);
  const iconSize = 30;

  if (darkMode) {
    return (
      <span
        onClick={() => setDarkMode(false)}
        css={css({
          color: 'white',
          '&:hover': {
            color: '#02F657',
            cursor: 'pointer',
          },
        })}
      >
        <Sun size={iconSize} />
      </span>
    );
  }

  return (
    <span
      onClick={() => setDarkMode(true)}
      css={css({
        color: 'black',
        '&:hover': {
          color: '#FBE302',
          cursor: 'pointer',
        },
      })}
    >
      <Moon size={iconSize} />
    </span>
  );
}

export default DarkModeButton;
