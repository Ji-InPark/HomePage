import React from 'react';
import { css } from '@emotion/react';
import DarkModeButton from './DarkModeButton';
import TextButton from '../button/TextButton';

function Header() {
  const centeredFlex = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div
      css={css({
        height: '120px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      })}
    >
      <div
        css={css({
          ...centeredFlex,
        })}
      >
        <DarkModeButton />
      </div>
      <div
        css={css({
          ...centeredFlex,
          justifyContent: 'flex-end',
          gap: '50px',
        })}
      >
        <TextButton text={'Home'} path={'/'} />
        <TextButton text={'Projects'} path={'/projects'} />
        <TextButton text={'Career'} path={'/career'} />
      </div>
    </div>
  );
}

export default Header;
