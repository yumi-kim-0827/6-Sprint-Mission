import type { SVGProps } from 'react';
import React from 'react';

const Plus = ({
  width = 48,
  height = 48,
  stroke = '#9CA3AF',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 24H38" stroke={stroke} strokeWidth={4} strokeLinecap="round" />
    <path d="M24 38V10" stroke={stroke} strokeWidth={4} strokeLinecap="round" />
  </svg>
);
export default Plus;
