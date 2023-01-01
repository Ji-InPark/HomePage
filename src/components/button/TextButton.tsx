import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';

interface Props {
  text: string;
  path: string;
}

function TextButton({ text, path }: Props) {
  const useShadow = !useRecoilValue(darkModeAtoms);

  return (
    <span
      css={css({
        fontSize: '24px',
        textDecoration: 'underline',
        userSelect: 'none',
      })}
    >
      <Link
        css={css({
          textShadow: useShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
          '&:visited': { color: 'inherit' },
        })}
        to={path}
      >
        {text}
      </Link>
    </span>
  );
}

export default TextButton;
