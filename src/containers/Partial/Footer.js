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
    const { isSectionActive } = this.props;

    return (
      <section className="footer-section vertical-align-middle">
        <div className="dimmer" />
        <Container>
          <Row>
            <Col xs="12">
              <div className={"animated " + (isSectionActive ? 'zoomIn' : 'zoomOut')}>
                <BadgeLogo
                  className="footer-logo text-center"
                  width="90vw"
                />
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

Footer.propTypes = {
  isSectionActive: PropTypes.bool,
}

Footer.defaultProps = {
  isSectionActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
