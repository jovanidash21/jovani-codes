import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

class FacePortrait extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { speech } = this.props;

    return (
      <div className="face-portrait">
        <div className="speech-bubble d-none d-md-block">
          <Typist>
            <Typist.Delay ms={500} />
            {speech}
          </Typist>
        </div>
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
