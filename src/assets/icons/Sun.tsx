import React from 'react';

interface Props {
  size: number;
}

const SvgComponent = ({ size }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M8 .25a.75.75 0 0 1 .75.75v1.273a.75.75 0 0 1-1.5 0V1A.75.75 0 0 1 8 .25z" />
      <path fillRule="evenodd" d="M4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" clipRule="evenodd" />
      <path d="M8.75 13.727a.75.75 0 0 0-1.5 0V15a.75.75 0 0 0 1.5 0v-1.273zM2.519 2.518a.75.75 0 0 1 1.06 0l.904.904a.75.75 0 0 1-1.06 1.06l-.904-.903a.75.75 0 0 1 0-1.06zm10.059 8.999a.75.75 0 0 0-1.061 1.06l.904.904a.75.75 0 1 0 1.06-1.06l-.903-.904zM.25 8A.75.75 0 0 1 1 7.25h1.273a.75.75 0 0 1 0 1.5H1A.75.75 0 0 1 .25 8zm13.477-.75a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5h-1.273zm-9.244 4.267a.75.75 0 0 1 0 1.06l-.904.904a.75.75 0 0 1-1.06-1.06l.903-.904a.75.75 0 0 1 1.061 0zm8.998-7.937a.75.75 0 0 0-1.06-1.062l-.904.904a.75.75 0 1 0 1.06 1.06l.904-.903z" />
    </g>
  </svg>
);

export default SvgComponent;
