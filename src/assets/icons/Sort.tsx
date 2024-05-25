import type { SVGProps } from 'react';
import React from 'react';

const Sort = ({
  width = 24,
  height = 24,
  stroke = '#1F2937',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 6.5V17.5M15 17.5L11.5 14M15 17.5L18.5 14"
      stroke={stroke}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.90002 15.5L9.50002 15.5"
      stroke={stroke}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
    <path
      d="M5 7.5H10"
      stroke={stroke}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
    <path
      d="M6.30005 11.5L9.50005 11.5"
      stroke="#1F2937"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </svg>
);
export default Sort;
