import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import ReactSVG from 'react-svg';
import Typist from 'react-typist';

class LogoSpeech extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpeechBubble: false
    };
  }
  onMouseEnter() {
    this.setState({showSpeechBubble: true});
  }
  onMouseLeave() {
    this.setState({showSpeechBubble: false});
  }
  render() {
    const { speech } = this.props;
    const { showSpeechBubble } = this.state;

    return (
      <div
        className="logo-speech"
        onMouseEnter={::this.onMouseEnter}
        onMouseLeave={::this.onMouseLeave}
      >
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            showSpeechBubble &&
            <div className="speech-bubble">
              <Typist>
                <Typist.Delay ms={500} />
                {speech}
              </Typist>
            </div>
          }
        </VelocityTransitionGroup>
        <ReactSVG
          path={JOVANI_CODES.images + '/face-logo.svg'}
          wrapperClassName="speaker"
          className="face-logo"
        />
      </div>
    )
  }
}

LogoSpeech.propTypes = {
  speech: PropTypes.string
}

LogoSpeech.defaultProps = {
  speech: ''
}

export default LogoSpeech;
