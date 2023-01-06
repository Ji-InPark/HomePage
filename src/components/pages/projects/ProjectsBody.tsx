import React from 'react';
import { css } from '@emotion/react';
import ProjectContainer from './ProjectContainer';
import { KAgent, KuLeumBridge, LCTP } from '../../../resources/ProjectDescriptions';

function ProjectsBody() {
  return (
    <div
      css={css({
        width: '100%',
        height: 'calc(100% - 120)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 70,
        paddingTop: 70,
        paddingBottom: 70,
      })}
    >
      <ProjectContainer project={KuLeumBridge} />
      <ProjectContainer project={KAgent} />
      <ProjectContainer project={LCTP} />
    </div>
  );
}

export default ProjectsBody;
