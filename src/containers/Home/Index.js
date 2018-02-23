import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollToTopOnMount,
  SectionsContainer,
  Section
} from 'react-fullpage';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';
import Banner from '../Partial/Banner';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchPage } = this.props;

    fetchPage('home');
  }
  handleHeadData() {
    const title = `${JOVANI_CODES.siteName} | ${JOVANI_CODES.siteDescription}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const { page } = this.props;
    let options = {
      sectionClassName: 'full-page-section',
      anchors: ['banner-section'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      arrowNavigation: true
    };

    return (
      <SectionsContainer {...options}>
        {::this.handleHeadData()}
        <ScrollToTopOnMount />
        <Section><Banner /></Section>
      </SectionsContainer>
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
)(Home);
