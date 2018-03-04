import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
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
        <ReactSVG
          path={JOVANI_CODES.images + '/badge-logo.svg'}
          wrapperClassName="footer-logo"
          className="badge-logo"
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
