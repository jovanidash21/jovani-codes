import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const WorkSlideItem = (props) => {
  return (
    <div className="work-slide-item">
      <Container>
        <Row>
          <Col className="work-image-wrapper" xs="12" md="7">
            <img src={props.image} className="img-fluid work-image" />
          </Col>
          <Col className="work-description-wrapper" xs="12" md="5">
            <div className="work-description">
              <h2 className={"section-title animated " +
                (props.isSlideActive ? 'fadeInUp' : 'fadeOutDown')}
              >
                {props.title}
              </h2>
              {
                props.description &&
                <p className={"section-description animated " +
                  (props.isSlideActive ? 'fadeIn' : 'fadeOut')}
                >
                  {props.description}
                </p>
              }
              <div className="work-links">
                {
                  props.siteLink &&
                  <div className={"flip-button white animated " +
                    (props.isSlideActive ? 'zoomIn' : 'zoomOut')}
                  >
                    <a href={props.siteLink} target="_blank" title="Visit the site" />
                  </div>
                }
                {
                  props.githubLink &&
                  <div className={"flip-button black animated " +
                    (props.isSlideActive ? 'zoomIn' : 'zoomOut')}
                  >
                    <a href={props.githubLink} target="_blank" title="Go to GitHub" />
                  </div>
                }
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

WorkSlideItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  siteLink: PropTypes.string,
  githubLink: PropTypes.string,
  isSlideActive: PropTypes.bool,
}

WorkSlideItem.defaultProps = {
  description: '',
  siteLink: '',
  githubLink: '',
  isSlideActive: false
}

export default WorkSlideItem;
