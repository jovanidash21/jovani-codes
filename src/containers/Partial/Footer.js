import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import BadgeLogo from '../../components/BadgeLogo';
import mapDispatchToProps from '../../actions';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isActive } = this.props;

    return (
      <section className="footer-section vertical-align-middle background-black">
        <Container>
          <Row>
            <Col xs="12">
              <BadgeLogo
                className="footer-logo text-center"
                width="90vw"
              />
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

Footer.propTypes = {
  isActive: PropTypes.bool,
}

Footer.defaultProps = {
  isActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
