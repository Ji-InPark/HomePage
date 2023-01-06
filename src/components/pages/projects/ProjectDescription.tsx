import React from 'react';
import { css } from '@emotion/react';
import { Project } from '../../../types';
import VerticalBlank from '../../blank/VerticalBlank';
import PlainText from '../../text/PlainText';

interface Props {
  project: Project;
}

function ProjectDescription({ project }: Props) {
  return (
    <div
      css={css({
        width: '100%',
        height: '100%',
        userSelect: 'none',
      })}
    >
      <PlainText fontSize={48} fontWeight={'bold'}>
        {project.title}
      </PlainText>
      <PlainText fontSize={18}>{project.subTitle}</PlainText>
      <VerticalBlank size={20} />
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        })}
      >
        {project.links.map((it) => {
          return (
            <div
              css={css({
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              })}
            >
              {it.icon}
              {it.description}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectDescription;
