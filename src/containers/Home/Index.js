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
import Work from '../Partial/Work';
import About from '../Partial/About';
import Contact from '../Partial/Contact';
import Footer from '../Partial/Footer';

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
    const fullPageOptions = {
      sectionClassName: 'full-page-section',
      anchors: [
        'banner',
        'work',
        'about',
        'contact',
        'footer'
      ],
      scrollBar: false,
      navigation: true,
      navigationClass: 'full-page-navigation',
      navigationAnchorClass: 'full-page-navigation-anchor',
      verticalAlign: false,
      arrowNavigation: true
    };

    return (
      <SectionsContainer {...fullPageOptions}>
        {::this.handleHeadData()}
        <ScrollToTopOnMount />
        <Section><Banner /></Section>
        <Section><Work /></Section>
        <Section><About /></Section>
        <Section><Contact /></Section>
        <Section><Footer /></Section>
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
