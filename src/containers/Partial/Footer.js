import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BadgeLogo from '../../components/BadgeLogo';
import mapDispatchToProps from '../../actions';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isActive } = this.props;

    return (
      <section className="footer-section background-black">
        <BadgeLogo
          className="footer-logo"
          width="90%"
        />
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
