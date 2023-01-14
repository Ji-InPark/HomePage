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

export const textFocusInContract = css`
  animation: focus-in-contract 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes focus-in-contract {
    0% {
      letter-spacing: 0.5em;
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const textFadeInTop = css`
  animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes fade-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
