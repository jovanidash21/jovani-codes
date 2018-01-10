import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapDispatchToProps from '../../actions';
import ScrollDownIndicator from '../../components/Banner/ScrollDownIndicator';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { page } = this.props;

    return (
      <section className="banner-section">
        <div className="banner-content">
          <Container>
            <Row>
              <Col xs="6">
                <h2>Lorem ipsum dolor</h2>
                <h4>Sed porttitor lectus nibh</h4>
              </Col>
              <Col xs="6" />
            </Row>
            <ScrollDownIndicator>Scroll Down</ScrollDownIndicator>
          </Container>
        </div>

      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
