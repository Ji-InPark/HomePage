import React from 'react';
import { css } from '@emotion/react';
import Colors from '../assets/colors/Colors';
import Header from '../components/header/Header';
import HomeBody from '../components/pages/home/HomeBody';

function Home() {
  const colors = Colors();

  return (
    <div
      css={css({
        width: '100vw',
        height: '100vh',
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
        <HomeBody />
      </div>
    </div>
  );
}

export default Home;
