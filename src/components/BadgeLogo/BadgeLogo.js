import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const BadgeLogo = (props) => {
  return (
    <ReactSVG
      path={JOVANI_CODES.images + '/logos/badge-logo.svg'}
      wrapperClassName={props.className}
      className="badge-logo"
      style={{height: props.height, width: props.width}}
    />
  )
}

BadgeLogo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

BadgeLogo.defaultProps = {
  className: '',
  height: 'auto',
  width: 'auto'
}

export default BadgeLogo;
