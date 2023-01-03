import React from 'react';
import { css } from '@emotion/react';
import Header from '../components/header/Header';
import Colors from '../assets/colors/Colors';

function Projects() {
  const colors = Colors();

  return (
    <div
      css={css({
        width: '100vw',
        height: '100vh',
        background: colors.basicBackground,
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
      </div>
    </div>
  );
}

export default Projects;
