import React from 'react';
import { css } from '@emotion/react';

interface Props {
  size: number;
}

function VerticalBlank({ size }: Props) {
  return <div css={css({ height: size })}></div>;
}

export default VerticalBlank;
