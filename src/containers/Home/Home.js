import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollToTopOnMount,
  SectionsContainer,
  Section
} from 'react-fullpage';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';
import {
  Banner,
  About,
  Work,
  Contact,
  Footer
} from '../Partial'

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
      navigationClass: 'full-page-navigation',
      navigationAnchorClass: 'full-page-navigation-anchor',
      scrollCallback: (states) => this.setState({activeSection: states.activeSection})
    };

    return (
      <div>
        <ScrollToTopOnMount />
        <SectionsContainer {...fullPageOptions} activeSection={activeSection}>
          {::this.handleHeadData()}
          <Section>
            <Banner isSectionActive={activeSection === 0} />
          </Section>
          <Section>
            <About isSectionActive={activeSection === 1} />
          </Section>
          <Section>
            <Work isSectionActive={activeSection === 2} />
          </Section>
          <Section>
            <Contact isSectionActive={activeSection === 3} />
          </Section>
          <Section>
            <Footer isSectionActive={activeSection === 4} />
          </Section>
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
