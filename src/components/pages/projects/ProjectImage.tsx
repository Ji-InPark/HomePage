import React, { useRef, useState } from 'react';
import { css } from '@emotion/react';
import LoadingContainer from '../../loading/LoadingContainer';

interface Props {
  imageUrl: string;
  width?: number;
  height?: number;
}

function ProjectImage({ imageUrl, width = 500, height = 300 }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const divElement = useRef<HTMLDivElement>(null);
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
      {isLoaded ? null : <LoadingContainer width={width} height={height} />}
      <img
        src={imageUrl}
        css={css({
          width,
          height,
          display: isLoaded ? '' : 'none',
        })}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default ProjectImage;
