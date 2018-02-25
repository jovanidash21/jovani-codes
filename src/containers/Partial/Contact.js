import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapDispatchToProps from '../../actions';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      options,
      page
    } = this.props;

    return (
      <section className="contact-section background-tertiary">
        <Container>
          <Row>
            <Col xs="12">
              <h2 className="section-title">Contact</h2>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
