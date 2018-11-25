import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const FaceLogo = (props) => {
  return (
    <ReactSVG
      className={props.className}
      src={JOVANI_CODES.images + '/logos/face-logo.svg'}
      svgClassName="face-logo"
      svgStyle={{height: props.height, width: props.width}}
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
