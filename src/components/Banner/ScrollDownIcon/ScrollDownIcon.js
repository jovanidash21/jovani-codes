import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ScrollDownIcon = (props) => {
  return (
    <div className="scroll-down-icon">
      <span className="mouse" title={props.title}>
        <span className="scroll-wheel" />
      </span>
      {props.title}
    </div>
  )
}

ScrollDownIcon.propTypes = {
  title: PropTypes.string
}

ScrollDownIcon.defaultProps = {
  title: ''
}

export default ScrollDownIcon;
