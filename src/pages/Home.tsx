import React from 'react';
import { css } from '@emotion/react';
import Colors from '../assets/colors/Colors';

function Home() {
  const colors = Colors();

  return (
    <div
      css={css({
        width: '100vw',
        height: '100vh',
        transition: 'background-color 0.5s ease',
        background: colors.background,
      })}
    >
      <div
        css={css({
          width: '70%',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: colors.font,
        })}
      >
        home
      </div>
    </div>
  );
}

export default Home;
