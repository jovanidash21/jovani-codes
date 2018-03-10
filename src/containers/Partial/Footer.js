import React, { Component } from 'react';
import { connect } from 'react-redux';
import BadgeLogo from '../../components/BadgeLogo';
import mapDispatchToProps from '../../actions';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      options,
      page
    } = this.props;

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
