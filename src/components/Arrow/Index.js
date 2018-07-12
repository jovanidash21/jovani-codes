import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const Arrow = (props) => {
  return (
    <div
      className={props.className}
      style={{...props.style}}
      onClick={props.onClick}
    >
      <ReactSVG path={JOVANI_CODES.images + '/icons/arrows/' + props.direction + '-arrow.svg'} />
    </div>
  )
}

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Arrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {}
}

export default Arrow;
