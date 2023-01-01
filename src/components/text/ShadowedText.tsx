import React from 'react';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';

interface Props {
  text: string;
  fontSize: number;
}

function ShadowedText({ text, fontSize }: Props) {
  const useShadow = !useRecoilValue(darkModeAtoms);

  return (
    <div
      css={css({
        fontSize,
        textShadow: useShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
      })}
    >
      {text}
    </div>
  );
}

export default ShadowedText;
