import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const CircleIcon = (props) => {
  return (
    <div className="circle-icon vertical-align-middle">
      <FontAwesome
        name={props.icon}
        size="4x"
      />
    </div>
  )
}

CircleIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string
}

CircleIcon.defaultProps = {
  title: ''
}

export default CircleIcon;
