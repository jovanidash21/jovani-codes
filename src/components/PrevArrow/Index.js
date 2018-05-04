import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{...props.style}}
      onClick={props.onClick}
    >
      <ReactSVG path={JOVANI_CODES.images + '/icons/prev-arrow.svg'} />
    </div>
  )
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

PrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {}
}

export default PrevArrow;
