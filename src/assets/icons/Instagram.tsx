import * as React from 'react';

interface Props {
  size: number;
}

const SvgComponent = ({ size }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="transparent">
    <rect x={2} y={2} width={20} height={20} rx={5} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 6v.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgComponent;
