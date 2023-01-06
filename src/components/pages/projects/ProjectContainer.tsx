import React from 'react';
import ProjectImage from './ProjectImage';
import { css } from '@emotion/react';
import { Project } from '../../../types';
import ProjectDescription from './ProjectDescription';

interface Props {
  project: Project;
}

function ProjectContainer({ project }: Props) {
  return (
    <div
      css={css({
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
      })}
    >
      <ProjectImage imageUrl={project.imageUrl} />
      <ProjectDescription project={project} />
    </div>
  );
}

export default ProjectContainer;
