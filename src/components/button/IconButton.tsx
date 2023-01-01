import React from 'react';
import { css, jsx } from '@emotion/react';
import JSX = jsx.JSX;

interface Props {
  iconElement: JSX.Element;
  clickUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function IconButton({ iconElement, clickUrl }: Props) {
  return (
    <span
      onClick={() => open(clickUrl, 'blank=')}
      css={css({
        '&:hover': {
          cursor: 'pointer',
        },
      })}
    >
      {iconElement}
    </span>
  );
}

export default IconButton;
