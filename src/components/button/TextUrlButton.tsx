import React from 'react';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';

interface Props {
  text: string;
  path: string;
}

function TextUrlButton({ text, path }: Props) {
  const useShadow = !useRecoilValue(darkModeAtoms);

  return (
    <span
      css={css({
        fontSize: '24px',
        textDecoration: 'underline',
        userSelect: 'none',
        textShadow: useShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
        '&:visited': { color: 'inherit' },
      })}
      onClick={() => open(path, 'blank=')}
    >
      {text}
    </span>
  );
}

export default TextUrlButton;
