import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Head from '../../components/Head';
import FaceLogo from '../../components/FaceLogo';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  handleHeadData(headTitle) {
    const title = `${headTitle} | ${JOVANI_CODES.siteName}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const { page } = this.props;

    return (
      <section class="not-found-section">
        {::this.handleHeadData('Page Not Found')}
        <div className="dimmer" />
        <div className="main-logo-wrapper">
          <Link to="/">
            <FaceLogo
              className="main-logo"
              width="120px"
            />
          </Link>
        </div>
        <div className="not-found-description text-center">
          <h2>Oops!</h2>
          <p>Sorry, but the page you are looking for does not exist.</p>
        </div>
      </section>
    )
  }
}

export default connect()(NotFound);
