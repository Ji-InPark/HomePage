import React from 'react';
import { css, jsx } from '@emotion/react';
import JSX = jsx.JSX;

interface Props {
  iconElement: JSX.Element;
  openUrl?: string;
  onClick?: () => void;
}

function IconButton({ iconElement, onClick, openUrl }: Props) {
  return (
    <span
      onClick={onClick ? onClick : () => open(openUrl, 'blank=')}
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
