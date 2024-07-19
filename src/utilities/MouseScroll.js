import React from 'react';
import './MouseScroll.css'; 

const MouseScroll = ({ onScroll }) => {
  return (
    <div className="mouse_scroll" onClick={onScroll}>
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div className="scroll_arrows">
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </div>
    </div>
  );
};

export default MouseScroll;
