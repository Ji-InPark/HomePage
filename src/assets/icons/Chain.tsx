import * as React from 'react';

interface Props {
  size: number;
}

const SvgComponent = ({ size }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 21 21">
    <g fill="transparent" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 11.5c.97 1.367 3.011 1.127 4.011 0l1.989-2c1.124-1.228 1.164-2.814 0-4-1.136-1.157-2.864-1.157-4 0l-2 2" />
      <path d="M11.5 10.57c-.97-1.367-3-1.197-4-.07l-2 1.975c-1.124 1.228-1.164 2.839 0 4.025 1.136 1.157 2.864 1.157 4 0l2-2" />
    </g>
  </svg>
);

export default SvgComponent;
