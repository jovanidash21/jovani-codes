import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapDispatchToProps from '../../actions';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isSectionActive } = this.props;

    return (
      <section className="about-section vertical-align-middle background-primary">
        <Container>
          <Row>
            <Col xs="12">
              <div className="greetings text-center">
                <p className={"color-dark-brown text-uppercase animated " +
                  (isSectionActive ? 'rotateIn' : 'rotateOut')}
                >
                  Hello
                </p>
                <p className={"color-white text-lowercase animated " +
                  (isSectionActive ? 'fadeInDownBig' : 'fadeOutUpBig')}
                >
                  Stranger
                </p>
                <p className={"color-tertiary text-uppercase animated " +
                  (isSectionActive ? 'rotateInDownLeft' : 'rotateOutUpLeft')}
                >
                  I&#39;m a Web developer
                </p>
                <p className={"color-dark-brown text-uppercase animated " +
                  (isSectionActive ? 'bounceInDown' : 'bounceOutUp')}
                >
                  I Build
                </p>
                <p className={"color-tertiary text-uppercase animated " +
                  (isSectionActive ? 'bounceInUp' : 'bounceOutDown')}
                >
                  Websites
                </p>
                <p className={"color-dark-brown text-lowercase animated " +
                  (isSectionActive ? 'zoomIn' : 'zoomOut')}
                >
                  with
                </p>
                <p className={"color-white text-lowercase animated " +
                  (isSectionActive ? 'fadeInUpBig' : 'fadeOutDownBig')}
                >
                  Maximum
                </p>
                <p className={"color-dark-brown text-uppercase animated " +
                  (isSectionActive ? 'rollIn' : 'rollOut')}
                >
                  Effort
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.options,
    page: state.page,
  }
}

About.propTypes = {
  isSectionActive: PropTypes.bool,
}

About.defaultProps = {
  isSectionActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
