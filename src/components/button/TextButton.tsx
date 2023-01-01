import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  path: string;
}

function TextButton({ text, path }: Props) {
  return (
    <span
      css={css({
        fontSize: '24px',
        textDecoration: 'underline',
        userSelect: 'none',
      })}
    >
      <Link css={css({ '&:visited': { color: 'inherit' } })} to={path}>
        {text}
      </Link>
    </span>
  );
}

export default TextButton;
