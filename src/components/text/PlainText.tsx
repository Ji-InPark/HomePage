import React, { ReactElement } from 'react';
import { css } from '@emotion/react';

interface Props {
  children: ReactElement | string | number;
  fontSize: number;
  fontWeight?: string;
}

function PlainText({ children, fontSize, fontWeight = 'none' }: Props) {
  return (
    <div
      css={css({
        fontSize,
        fontWeight,
      })}
    >
      {children}
    </div>
  );
}

export default PlainText;
