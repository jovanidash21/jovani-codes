import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchPage } = this.props;

    fetchPage('contact');
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
      <div>
        {::this.handleHeadData('Contact')}
      </div>
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
)(Contact);
