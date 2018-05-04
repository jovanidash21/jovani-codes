import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{...props.style}}
      onClick={props.onClick}
    >
      <ReactSVG path={JOVANI_CODES.images + '/icons/next-arrow.svg'} />
    </div>
  )
}

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

NextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {}
}

export default NextArrow;
