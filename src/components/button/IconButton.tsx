import React from 'react';
import { css, jsx } from '@emotion/react';
import JSX = jsx.JSX;

interface Props {
  iconElement: JSX.Element;
  onClick: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function IconButton({ iconElement, onClick }: Props) {
  return (
    <span
      onClick={onClick}
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
