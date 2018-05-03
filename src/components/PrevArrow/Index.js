import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{...props.style}}
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon="angle-left"
        size="2x"
      />
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
