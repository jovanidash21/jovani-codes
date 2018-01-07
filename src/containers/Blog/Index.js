import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';
import Banner from '../Partial/Banner';

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {
      fetchPage,
      fetchPosts
    } = this.props;

    fetchPage('blog');
    fetchPosts('blog');
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
        {::this.handleHeadData('Blog')}
        <Banner />
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
)(Blog);
