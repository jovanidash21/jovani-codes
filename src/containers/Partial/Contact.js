import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapDispatchToProps from '../../actions';
import LogoSpeech from '../../components/LogoSpeech';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isActive } = this.props;

    return (
      <section className="contact-section background-tertiary">
        <Container>
          <Row>
            <Col xs="12">
              <h2 className="section-title color-white">Contact</h2>
              <p className="section-description color-white">
                Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              </p>
            </Col>
          </Row>
        </Container>
        <LogoSpeech speech="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus." />
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

Contact.propTypes = {
  isActive: PropTypes.bool,
}

Contact.defaultProps = {
  isActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
