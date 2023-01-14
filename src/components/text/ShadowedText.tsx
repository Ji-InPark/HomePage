import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';

interface Props {
  text: string;
  fontSize: number;
  animation?: SerializedStyles;
}

function ShadowedText({ text, fontSize, animation }: Props) {
  const useShadow = !useRecoilValue(darkModeAtoms);

  return (
    <div
      css={css([
        animation,
        {
          fontSize,
          textShadow: useShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
          userSelect: 'none',
        },
      ])}
    >
      {text}
    </div>
  );
}

export default ShadowedText;
