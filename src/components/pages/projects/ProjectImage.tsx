import React, { useRef } from 'react';
import { css } from '@emotion/react';

interface Props {
  imageUrl: string;
}

function ProjectImage({ imageUrl }: Props) {
  const divElement = useRef<HTMLDivElement>(null);
  const width = 500;
  const height = 300;
  const rotation = 15;

  const onMouseMove = (e: React.MouseEvent) => {
    const currentDiv = divElement.current!;
    const rect = currentDiv.getBoundingClientRect();

    const horizontal = (e.clientX - rect.left) / currentDiv.clientWidth;
    const vertical = (e.clientY - rect.top) / currentDiv.clientHeight;

    const rotateX = vertical * rotation - rotation / 2;
    const rotateY = rotation / 2 - horizontal * rotation;

    divElement.current!.style.transform = `perspective(500px) scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onMouseOut = () => {
    divElement.current!.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  };

  return (
    <div
      ref={divElement}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      css={css({
        margin: 'auto',
        transition: '0.1s',
        userSelect: 'none',
        '&:hover': {
          cursor: 'pointer',
        },
      })}
    >
      <img
        src={imageUrl}
        css={css({
          width,
          height,
        })}
      />
    </div>
  );
}

export default ProjectImage;
