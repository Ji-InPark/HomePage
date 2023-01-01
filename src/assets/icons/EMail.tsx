import * as React from 'react';

interface Props {
  size: number;
}

const SvgComponent = ({ size }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 3.25A2.25 2.25 0 0 1 2.25 1h11.5A2.25 2.25 0 0 1 16 3.25v9.5A2.25 2.25 0 0 1 13.75 15H2.25A2.25 2.25 0 0 1 0 12.75v-9.5zm2.25-.75a.75.75 0 0 0-.748.69L8 8.297l6.498-5.105a.75.75 0 0 0-.748-.691H2.25zm-.75 9.885V5.097l3.865 3.037L1.5 12.385zM2.514 13.5h10.972L9.452 9.063l-.989.777a.75.75 0 0 1-.926 0l-.99-.777L2.515 13.5zm8.12-5.366 3.866 4.251V5.097l-3.865 3.037z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
