import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import './PaginationBar.css';

function PagenationBar() {
  return (
    <>
      <div className="PagenationBarWrapper">
        <div className="PagenationBar">
          <button>
            <FaChevronLeft />
          </button>
          <button className="active">1</button>
          <button>2</button>
          <button>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default PagenationBar;
