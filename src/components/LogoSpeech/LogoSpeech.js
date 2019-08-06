import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import ReactSVG from 'react-svg';
import Typist from 'react-typist';
import './styles.scss';

class LogoSpeech extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpeechBubble: false
    };
  }
  onMouseEnter(event) {
    event.stopPropagation();

    this.setState({showSpeechBubble: true});
  }
  onMouseLeave(event) {
    event.stopPropagation();

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
            <div className="speech-bubble small left">
              <Typist>
                <Typist.Delay ms={500} />
                {speech}
              </Typist>
            </div>
          }
        </VelocityTransitionGroup>
        <ReactSVG
          className="speaker"
          src={JOVANI_CODES.images + '/logos/face-logo.svg'}
          svgClassName="face-logo"
        />
      </div>
    )
  }
}

LogoSpeech.propTypes = {
  speech: PropTypes.string,
}

LogoSpeech.defaultProps = {
  speech: '',
}

export default LogoSpeech;
