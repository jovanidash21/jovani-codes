import React from 'react';
import PropTypes from 'prop-types';

const WorkSlideItem = (props) => {
  return (
    <div className="work-slide-item">
      <h2 className="section-title">{props.title}</h2>
    </div>
  )
}

WorkSlideItem.propTypes = {
  title: PropTypes.string
}

WorkSlideItem.defaultProps = {
  title: ''
}

export default WorkSlideItem;
