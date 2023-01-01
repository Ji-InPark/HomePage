import React from 'react';
import { css } from '@emotion/react';

interface Props {
  imageUrl: string;
  size: string;
}

function ProfileImage({ imageUrl, size }: Props) {
  return (
    <img
      src={imageUrl}
      css={css({
        width: size,
        height: size,
        borderRadius: '50%',
      })}
    />
  );
}

export default ProfileImage;
