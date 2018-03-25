import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const SocialMediaItem = (props) => {
  return (
    <div className={"social-media-item " + props.socialMedia}>
      <a href={props.link} title={props.title} target="_blank">
        <div className="hexagon-anti-diagonal">
          <div className="hexagon-main-diagonal">
            <div className="hexagon-vertical" style={{backgroundColor: props.hexagonColor}}>
              <FontAwesome
                name={props.icon}
                size="2x"
                style={{color: props.iconColor}}
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
  hexagonColor: PropTypes.string,
  iconColor: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string
}

SocialMediaItem.defaultProps = {
  socialMedia: '',
  hexagonColor: "#fff",
  iconColor: "#000",
  link: '#',
  title: ''
}

export default SocialMediaItem;
