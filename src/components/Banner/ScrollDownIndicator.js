import React from 'react';

const ScrollDownIndicator = (props) => {
  return (
    <div className="scroll-down-indicator">
      <span className="mouse">
        <span className="scroll-wheel" />
      </span>
      {props.children}
    </div>
  )
}

export default ScrollDownIndicator;
