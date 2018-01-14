import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import ReactSVG from 'react-svg';
import Particles from 'react-particles-js';
import mapDispatchToProps from '../../actions';
import SocialMediaItem from '../../components/SocialMediaItem';
import ScrollDownIndicator from '../../components/Banner/ScrollDownIndicator';
import particlesJSConfig from './particles-js-config.json';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      options,
      page
    } = this.props;

    return (
      <section className="banner-section">
        <Particles
          params={particlesJSConfig}
          className="particles"
        />
        <div className="banner-description">
          <Container>
            <Row>
              <Col xs="6">
                <h2>Lorem ipsum dolor</h2>
                <h4>Sed porttitor lectus nibh</h4>
                <div className="social-media-menu">
                  {
                    options.data.acf.facebook_url &&
                    <SocialMediaItem socialMedia="facebook" icon="facebook" link={options.data.acf.facebook_url} />
                  }
                  {
                    options.data.acf.twitter_url &&
                    <SocialMediaItem socialMedia="twitter" icon="twitter" link={options.data.acf.twitter_url} />
                  }
                  {
                    options.data.acf.instagram_url &&
                    <SocialMediaItem socialMedia="instagram" icon="instagram" link={options.data.acf.instagram_url} />
                  }
                  {
                    options.data.acf.linkedin_url &&
                    <SocialMediaItem socialMedia="linkedin" icon="linkedin" link={options.data.acf.linkedin_url} />
                  }
                  {
                    options.data.acf.google_plus_url &&
                    <SocialMediaItem socialMedia="google-plus" icon="google-plus" link={options.data.acf.google_plus_url} />
                  }
                  {
                    options.data.acf.youtube_url &&
                    <SocialMediaItem socialMedia="youtube" icon="youtube-play" link={options.data.acf.youtube_url} />
                  }
                  {
                    options.data.acf.github_url &&
                    <SocialMediaItem socialMedia="github" icon="github" link={options.data.acf.github_url} />
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <ReactSVG
          path={JOVANI_CODES.images + '/low-poly-portrait.svg'}
          wrapperClassName="face-portrait"
          className="low-poly"
        />
        <ScrollDownIndicator>Scroll Down</ScrollDownIndicator>
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
)(Banner);
