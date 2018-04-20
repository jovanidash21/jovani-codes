import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import Typist from 'react-typist';
import './styles.scss';

class FacePortrait extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpeechBubble: false,
      speechIndex: 0
    };
  }
  componentDidMount() {
    const { interval } = this.props;

    this.interval = setInterval(::this.handleSpeechBubbleToggle, interval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleSpeechBubbleToggle() {
    const { showSpeechBubble } = this.state;

    this.setState({showSpeechBubble: !showSpeechBubble});
  }
  handleSpeechBubbleIndex() {
    const { speeches } = this.props;
    const { speechIndex } = this.state;

    if ( speeches.length -1 > speechIndex ) {
      this.setState({speechIndex: this.state.speechIndex + 1});
    } else {
      this.setState({speechIndex: 0});
    }
  }
  render() {
    const { speeches } = this.props;
    const {
      showSpeechBubble,
      speechIndex
    } = this.state;

    return (
      <div className="face-portrait">
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            showSpeechBubble &&
            <div className="speech-bubble big right d-none d-md-block">
              <Typist startDelay={500} onTypingDone={::this.handleSpeechBubbleIndex}>
                {speeches[speechIndex]}
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
  speeches: PropTypes.array,
  interval: PropTypes.number
}

FacePortrait.defaultProps = {
  speeches: [],
  interval: 10000
}

export default FacePortrait;
