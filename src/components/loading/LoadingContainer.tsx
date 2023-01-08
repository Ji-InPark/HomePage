import React from 'react';
import Loading from '../../assets/icons/Loading';
import { css } from '@emotion/react';

interface Props {
  width: number;
  height: number;
}

function LoadingContainer({ width, height }: Props) {
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height,
      })}
    >
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '30%',
          height: '30%',
          background: 'transparent',
          borderRadius: 10,
          '@keyframes spin': {
            from: { transform: ' rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
          animation: 'spin 1s ease infinite',
        })}
      >
        <Loading />
      </div>
    </div>
  );
}

export default LoadingContainer;
