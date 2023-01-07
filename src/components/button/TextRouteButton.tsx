import React from 'react';
import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeAtoms } from '../../recoil/atoms';
import { underlineAnimation } from '../../assets/styles';

interface Props {
  text: string;
  path: string;
}

function TextRouteButton({ text, path }: Props) {
  const location = useLocation();
  const useShadow = !useRecoilValue(darkModeAtoms);

  return (
    <span
      css={css`
        ${underlineAnimation(location.pathname === path)}
      `}
    >
      <Link
        css={css({
          textDecoration: 'none',
          textShadow: useShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
          '&:visited': { color: 'inherit' },
        })}
        to={path}
      >
        {text}
      </Link>
    </span>
  );
}

export default TextRouteButton;
