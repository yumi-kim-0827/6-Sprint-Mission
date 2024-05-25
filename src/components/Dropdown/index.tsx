import React, { MouseEvent, ReactNode, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import './style.css';

interface OptionProps {
  label: string;
  onClick: () => void;
}

interface DropDownProps {
  triggerComponent: ReactNode;
  options: OptionProps[];
}

const DropDown = ({ triggerComponent, options }: DropDownProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div aria-expanded={open ? true : false} onClick={handleClick}>
        {triggerComponent}
      </div>
      <Menu
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option: OptionProps, index: number) => (
          <div key={option.label}>
            <MenuItem
              onClick={() => {
                option.onClick();
                handleClose();
              }}
              className="dropdown"
            >
              {option.label}
            </MenuItem>
            {index !== options.length - 1 && <Divider />}
          </div>
        ))}
      </Menu>
    </div>
  );
};

export default DropDown;
