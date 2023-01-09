import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import Header from '../components/header/Header';
import Colors from '../assets/colors/Colors';
import ProjectsBody from '../components/pages/projects/ProjectsBody';

function Projects() {
  const colors = Colors();

  useEffect(() => {
    document.title = 'Ji-In Park Projects';
  }, []);

  return (
    <div
      css={css({
        width: '100vw',
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
        <ProjectsBody />
      </div>
    </div>
  );
}

export default Projects;
