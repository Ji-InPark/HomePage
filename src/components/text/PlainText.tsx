import React, { ReactElement } from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface Props {
  children: ReactElement | string | number;
  fontSize: number;
  fontWeight?: string;
  animation?: SerializedStyles;
}

function PlainText({ children, fontSize, fontWeight = 'none', animation }: Props) {
  return (
    <div
      css={css([
        animation,
        {
          fontSize,
          fontWeight,
        },
      ])}
    >
      {children}
    </div>
  );
}

export default PlainText;
