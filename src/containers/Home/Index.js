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
import About from '../Partial/About';
import Work from '../Partial/Work';
import Contact from '../Partial/Contact';
import Footer from '../Partial/Footer';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: 0
    };
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
    const { activeSection } = this.state;
    const fullPageOptions = {
      sectionClassName: 'full-page-section',
      anchors: [
        'banner',
        'about',
        'work',
        'contact',
        'footer'
      ],
      scrollBar: false,
      navigation: true,
      navigationClass: 'full-page-navigation',
      navigationAnchorClass: 'full-page-navigation-anchor',
      verticalAlign: false,
      arrowNavigation: true,
      scrollCallback: (states) => this.setState({activeSection: states.activeSection})
    };

    return (
      <div>
        <ScrollToTopOnMount />
        <SectionsContainer {...fullPageOptions} activeSection={activeSection}>
          {::this.handleHeadData()}
          <Section><Banner isActive={activeSection === 0} /></Section>
          <Section><About isActive={activeSection === 1} /></Section>
          <Section><Work isActive={activeSection === 2} /></Section>
          <Section><Contact isActive={activeSection === 3} /></Section>
          <Section><Footer isActive={activeSection === 4} /></Section>
        </SectionsContainer>
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
)(Home);
