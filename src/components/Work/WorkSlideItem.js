import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const WorkSlideItem = (props) => {
  return (
    <div className="work-slide-item">
      <Container>
        <Row>
          <Col className="work-image-wrapper" xs="12" md="7">
            <img src={JOVANI_CODES.images + '/work/desktop.png'} className="img-fluid work-image" />
          </Col>
          <Col className="work-description-wrapper" xs="12" md="5">
            <div className="work-description">
              <h2 className="section-title">{props.title}</h2>
              {
                props.description &&
                <p className="section-description">
                  {props.description}
                </p>
              }
              {
                props.link &&
                <div className="flip-button">
                  <a href={props.link} target="_blank" title="Visit the site" />
                </div>
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

WorkSlideItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string
}

WorkSlideItem.defaultProps = {
  description: '',
  link: ''
}

export default WorkSlideItem;
