import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const FaceLogo = (props) => {
  return (
    <ReactSVG
      path={JOVANI_CODES.images + '/logos/face-logo.svg'}
      wrapperClassName={props.className}
      className="face-logo"
      style={{height: props.height, width: props.width}}
    />
  )
}

FaceLogo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

FaceLogo.defaultProps = {
  className: '',
  height: 'auto',
  width: 'auto'
}

export default FaceLogo;
