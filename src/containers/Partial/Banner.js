import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import ReactSVG from 'react-svg';
import Particles from 'react-particles-js';
import Typist from 'react-typist';
import mapDispatchToProps from '../../actions';
import SocialMediaItem from '../../components/SocialMediaItem';
import ScrollDownIndicator from '../../components/Banner/ScrollDownIndicator';
import particlesJSConfig from './particles-js-config.json';
import 'react-typist/dist/Typist.css';

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
              <Col xs="8">
                <ReactSVG
                  path={JOVANI_CODES.images + '/full-name.svg'}
                  wrapperClassName="full-name"
                  className="retro"
                />
                <div className="social-media-menu">
                  {
                    options.data.acf.social_medias &&
                    options.data.acf.social_medias.map((socialMedia, i) => {
                      switch (socialMedia) {
                        case 'facebook':
                          return (
                            <SocialMediaItem
                              socialMedia="facebook"
                              icon="facebook"
                              link={options.data.acf.facebook_url}
                              title={options.data.acf.facebook_message}
                            />
                          );
                          break;
                        case 'twitter':
                          return (
                            <SocialMediaItem
                              socialMedia="twitter"
                              icon="twitter"
                              link={options.data.acf.twitter_url}
                              title={options.data.acf.twitter_message}
                            />
                          );
                          break;
                        case 'instagram':
                          return (
                            <SocialMediaItem
                              socialMedia="instagram"
                              icon="instagram"
                              link={options.data.acf.instagram_url}
                              title={options.data.acf.instagram_message}
                            />
                          );
                          break;
                        case 'linkedin':
                          return (
                            <SocialMediaItem
                              socialMedia="linkedin"
                              icon="linkedin"
                              link={options.data.acf.linkedin_url}
                              title={options.data.acf.linkedin_message}
                            />
                          );
                          break;
                        case 'google_plus':
                          return (
                            <SocialMediaItem
                              socialMedia="google-plus"
                              icon="google-plus"
                              link={options.data.acf.google_plus_url}
                              title={options.data.acf.google_plus_message}
                            />
                          );
                          break;
                        case 'youtube':
                          return (
                            <SocialMediaItem
                              socialMedia="youtube"
                              icon="youtube-play"
                              link={options.data.acf.youtube_url}
                              title={options.data.acf.youtube_message}
                            />
                          );
                          break;
                        case 'github':
                          return (
                            <SocialMediaItem
                              socialMedia="github"
                              icon="github"
                              link={options.data.acf.github_url}
                              title={options.data.acf.github_message}
                            />
                          );
                          break;
                        }
                    })
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="face-portrait">

        </div>
        <ScrollDownIndicator title="Scroll Down" />
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
