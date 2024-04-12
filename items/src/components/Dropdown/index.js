import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import './style.css';

const DropDown = ({ triggerComponent, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
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
        {options.map((option, index) => (
          <>
            <MenuItem
              key={index}
              onClick={() => {
                option.onClick();
                handleClose();
              }}
              className='dropdown'
            >
              {option.label}
            </MenuItem>
            {index !== options.length - 1 && <Divider />}
          </>
        ))}
      </Menu>
    </div>
  );
};

export default DropDown;
