import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';

class Work extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {
      fetchPage,
      fetchPosts
    } = this.props;

    fetchPage('work');
    fetchPosts('work');
  }
  handleHeadData(headTitle) {
    const title = `${headTitle} | ${JOVANI_CODES.siteName}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const {
      page,
      post
    } = this.props;

    return (
      <div>
        {::this.handleHeadData('Work')}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
    post: state.post
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
