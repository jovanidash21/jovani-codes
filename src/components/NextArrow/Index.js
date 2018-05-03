import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{...props.style}}
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon="angle-right"
        size="2x"
      />
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
