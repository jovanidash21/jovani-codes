import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const CircleIcon = (props) => {
  return (
    <a
      href={props.link}
      className="circle-icon vertical-align-middle"
      target={props.target}
    >
      <FontAwesome
        name={props.icon}
        size="4x"
      />
    </a>
  )
}

CircleIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string
}

CircleIcon.defaultProps = {
  link: '#',
  target: '_self',
  title: ''
}

export default CircleIcon;
