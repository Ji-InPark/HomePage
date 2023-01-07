import { css } from '@emotion/react';

export const underlineAnimation = (isSelected: boolean) => {
  const selectedStyle = css`
    font-size: 24px;
    user-select: none;
    overflow: hidden;
    display: block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: currentColor;
      transition: opacity 300ms, transform 300ms;
      opacity: 1;
    }
  `;

  const useAnimation = css`
    &:after {
      transform: translate3d(-110%, 0, 0);
    }

    &:hover::after,
    &:focus::after {
      transform: translate3d(0, 0, 0);
    }
  `;

  return css`
    ${selectedStyle};
    ${isSelected ? '' : useAnimation}
  `;
};
