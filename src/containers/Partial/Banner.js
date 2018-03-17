import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Particles from 'react-particles-js';
import ReactSVG from 'react-svg';
import mapDispatchToProps from '../../actions';
import FaceLogo from '../../components/FaceLogo';
import FullName from '../../components/Banner/FullName';
import SocialMediaItem from '../../components/SocialMediaItem';
import ScrollDownIcon from '../../components/Banner/ScrollDownIcon';
import particlesJSConfig from './particles-js-config.json';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      options,
      page,
      isActive
    } = this.props;

    return (
      <section className="banner-section">
        <Particles
          params={particlesJSConfig}
          className="particles"
        />
        <FaceLogo
          className="main-logo"
          width="120px"
        />
        <div className="banner-description">
          <Container fluid>
            <Row>
              <Col xs="12" sm="8" md="7">
                <div className={"animated " + (isActive ? 'zoomIn' : 'zoomOut')}>
                  <FullName />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={"face-portrait animated " + (isActive ? 'slideInRight' : 'slideOutRight')}>
          <img src={JOVANI_CODES.images + '/low-poly-portrait.png'} className="low-poly" />
        </div>
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
        <ScrollDownIcon title="Scroll Down" />
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

Banner.propTypes = {
  isActive: PropTypes.bool,
}

Banner.defaultProps = {
  isActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
