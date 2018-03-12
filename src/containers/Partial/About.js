import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapDispatchToProps from '../../actions';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      options,
      page
    } = this.props;

    return (
      <section className="about-section background-secondary">
        <Container>
          <Row>
            <Col xs="12">
              <div className="greetings text-center">
                <p className="color-dark-brown text-uppercase">Hello</p>
                <p className="color-white text-lowercase">Stranger</p>
                <p className="color-tertiary text-uppercase">I&#39;m a Web developer</p>
                <p className="color-dark-brown text-uppercase">I Build</p>
                <p className="color-tertiary text-uppercase">Websites</p>
                <p className="color-dark-brown text-lowercase">with</p>
                <p className="color-white text-lowercase">Maximum</p>
                <p className="color-dark-brown text-uppercase">Effort</p>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
