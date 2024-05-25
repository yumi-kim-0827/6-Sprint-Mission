import type { SVGProps } from 'react';
import React from 'react';

const CloseX = ({
  width = 22,
  height = 24,
  fill = '#9CA3AF',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={11} cy={12} r={10} fill={fill} />
    <path
      d="M7.08044 8L15.0804 16"
      stroke="white"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
    <path
      d="M14.9999 8L6.99994 16"
      stroke="white"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </svg>
);
export default CloseX;
