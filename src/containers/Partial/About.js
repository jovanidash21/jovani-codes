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
    const { isActive } = this.props;

    return (
      <section className="about-section background-secondary">
        <Container>
          <Row>
            <Col xs="12">
              <div className="greetings text-center">
                <p className={"color-dark-brown text-uppercase animated " +
                  (isActive ? 'rotateIn' : 'rotateOut')}
                >
                  Hello
                </p>
                <p className={"color-white text-lowercase animated " +
                  (isActive ? 'slideInUp' : 'slideOutDown')}
                >
                  Stranger
                </p>
                <p className={"color-tertiary text-uppercase animated " +
                  (isActive ? 'fadeInUp' : 'fadeOutDown')}
                >
                  I&#39;m a Web developer
                </p>
                <p className={"color-dark-brown text-uppercase animated " +
                  (isActive ? 'bounceInDown' : 'bounceOutUp')}
                >
                  I Build
                </p>
                <p className={"color-tertiary text-uppercase animated " +
                  (isActive ? 'bounceInUp' : 'bounceOutDown')}
                >
                  Websites
                </p>
                <p className={"color-dark-brown text-lowercase animated " +
                  (isActive ? 'zoomIn' : 'zoomOut')}
                >
                  with
                </p>
                <p className={"color-white text-lowercase animated " +
                  (isActive ? 'fadeInUpBig' : 'fadeOutDownBig')}
                >
                  Maximum
                </p>
                <p className={"color-dark-brown text-uppercase animated " +
                  (isActive ? 'rollIn' : 'rollOut')}
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
    page: state.page
  }
}

About.propTypes = {
  isActive: PropTypes.bool,
}

About.defaultProps = {
  isActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
