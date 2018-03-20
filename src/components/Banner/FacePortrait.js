import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import Typist from 'react-typist';

class FacePortrait extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpeechBubble: false
    };
  }
  componentDidMount() {
    this.interval = setInterval(::this.handleSpeechBubbleToggle, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleSpeechBubbleToggle() {
    const { showSpeechBubble } = this.state;

    this.setState({showSpeechBubble: !showSpeechBubble});
  }
  render() {
    const { speech } = this.props;
    const { showSpeechBubble } = this.state;

    return (
      <div className="face-portrait">
      <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
        {
          showSpeechBubble &&
          <div className="speech-bubble big right">
            <Typist>
              <Typist.Delay ms={500} />
              {speech}
            </Typist>
          </div>
        }
      </VelocityTransitionGroup>
        <img src={JOVANI_CODES.images + '/low-poly-portrait.png'} className="low-poly" />
      </div>
    )
  }
}

FacePortrait.propTypes = {
  speech: PropTypes.string
}

FacePortrait.defaultProps = {
  speech: ''
}

export default FacePortrait;
