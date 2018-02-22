import React from 'react';
import PropTypes from 'prop-types';

const ScrollDownIndicator = (props) => {
  return (
    <div className="scroll-down-indicator">
      <span className="mouse" title={props.title}>
        <span className="scroll-wheel" />
      </span>
      {props.title}
    </div>
  )
}

ScrollDownIndicator.propTypes = {
  title: PropTypes.string
}

ScrollDownIndicator.defaultProps = {
  title: ''
}

export default ScrollDownIndicator;
