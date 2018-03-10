import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const FaceLogo = (props) => {
  return (
    <ReactSVG
      path={JOVANI_CODES.images + '/face-logo.svg'}
      wrapperClassName={props.wrapperClassName}
      className="face-logo"
      style={{height: props.height, width: props.width}}
    />
  )
}

FaceLogo.propTypes = {
  wrapperClassName: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

FaceLogo.defaultProps = {
  wrapperClassName: '',
  height: 'auto',
  width: 'auto'
}

export default FaceLogo;
