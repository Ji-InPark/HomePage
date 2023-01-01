import React from 'react';
import { css } from '@emotion/react';
import Colors from '../assets/colors/Colors';
import Header from '../components/header/Header';

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
          height: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: colors.fontColor,
        })}
      >
        <Header />
        home
      </div>
    </div>
  );
}

export default Home;