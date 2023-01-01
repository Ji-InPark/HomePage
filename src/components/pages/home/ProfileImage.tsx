import React from 'react';
import { css } from '@emotion/react';

interface Props {
  imageUrl: string;
  size: number;
}

function ProfileImage({ imageUrl, size }: Props) {
  return (
    <img
      src={imageUrl}
      css={css({
        width: size,
        height: size,
        borderRadius: '50%',
        userSelect: 'none',
      })}
    />
  );
}

export default ProfileImage;
