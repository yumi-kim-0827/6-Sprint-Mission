import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: IButtonProps) {
  const { children, ...buttonProps } = props;

  return (
    <button
      className="w-[100%] h-[100%] text-[16px] text-[#ffffff] bg-[#3692ff]"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
