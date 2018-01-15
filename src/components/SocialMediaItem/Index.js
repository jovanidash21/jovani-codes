import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const SocialMediaItem = (props) => {
  return (
    <div className={"social-media-item " + props.socialMedia}>
      <a href={props.link} target="_blank">
        <div className="hexagon-anti-diagonal">
          <div className="hexagon-main-diagonal">
            <div className="hexagon-vertical">
              <FontAwesome
                name={props.icon}
                size="2x"
              />
            </div>
           </div>
         </div>
       </a>
     </div>
  )
}

SocialMediaItem.propTypes = {
  socialMedia: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string
}

SocialMediaItem.defaultProps = {
  socialMedia: '',
  link: '#'
}

export default SocialMediaItem;
