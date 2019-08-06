import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const BadgeLogo = (props) => {
  return (
    <ReactSVG
      className={props.className}
      src={JOVANI_CODES.images + '/logos/badge-logo.svg'}
      svgClassName="badge-logo"
      svgStyle={{height: props.height, width: props.width}}
    />
  )
}

BadgeLogo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

BadgeLogo.defaultProps = {
  className: '',
  height: 'auto',
  width: 'auto',
}

export default BadgeLogo;
