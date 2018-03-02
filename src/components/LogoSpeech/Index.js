import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import Typist from 'react-typist';

const LogoSpeech = (props) => {
  return (
    <div className="logo-speech">
      <div className="speech-bubble">
        {props.speech}
      </div>
      <ReactSVG
        path={JOVANI_CODES.images + '/face-logo.svg'}
        wrapperClassName="speaker"
        className="face-logo"
      />
    </div>

  )
}

LogoSpeech.propTypes = {
  speech: PropTypes.string
}

LogoSpeech.defaultProps = {
  speech: ''
}

export default LogoSpeech;
