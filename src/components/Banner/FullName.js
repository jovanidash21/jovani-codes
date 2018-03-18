import React from 'react';
import Tilt from 'react-tilt';
import ReactSVG from 'react-svg';

const tiltOptions = {
  max: 20,
  speed: 200
}

const FullName = (props) => {
  return (
    <div className="full-name">
      <Tilt className="Tilt" options={{tiltOptions}}>
        <ReactSVG
          path={JOVANI_CODES.images + '/full-name.svg'}
          className="retro"
        />
      </Tilt>
    </div>
  )
}

export default FullName;
