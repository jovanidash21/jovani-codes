import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import mapDispatchToProps from '../../actions';
import { FaceLogo } from '../../components/FaceLogo';
import {
  FullName,
  FacePortrait,
  ScrollDownIcon,
} from '../../components/Banner';
import { SocialMediaItem } from '../../components/SocialMediaItem';
import particlesJSConfig from './particles-js-config.json';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speeches: []
    };
  }
  componentWillMount() {
    ::this.handleSpeechBubbleTexts();
  }
  handleSpeechBubbleTexts() {
    const { options } = this.props;
    const speechesArray = [];

    if (
      options.data.acf &&
      'speeches' in options.data.acf &&
      options.data.acf.speeches.length > 0
    ) {
      options.data.acf.speeches.map((speech, i) => {
        speechesArray.push(speech.speech);
      })

      this.setState({speeches: speechesArray});
    }
  }
  render() {
    const {
      options,
      page,
      isSectionActive,
    } = this.props;
    const { speeches } = this.state;
    const socialMediaItemOptions = {
      hexagonColor: "#e9e9e9",
      iconColor: "#000"
    };

    return (
      <section className="banner-section">
        <div className="dimmer" />
        <Particles
          params={particlesJSConfig}
          className="particles"
        />
        <div className="main-logo-wrapper">
          <div className={"animated " + (isSectionActive ? 'slideInDown' : 'slideOutUp')}>
            <FaceLogo
              className="main-logo"
              width="120px"
            />
          </div>
        </div>
        <div className="full-name-wrapper">
          <div className={"animated " + (isSectionActive ? 'slideInLeft' : 'slideOutLeft')}>
            <FullName />
          </div>
        </div>
        <div className="face-portrait-wrapper">
          <div className={"animated " + (isSectionActive ? 'slideInRight' : 'slideOutRight')}>
            <FacePortrait
              speeches={speeches}
              interval={11000}
            />
          </div>
        </div>
        <div className="social-media-menu d-none d-md-block">
          <div className={"animated " + (isSectionActive ? 'zoomIn' : 'zoomOut')}>
            {
              options.data.acf &&
              'social_medias' in options.data.acf &&
              options.data.acf.social_medias.length > 0 &&
              options.data.acf.social_medias.map((socialMedia, i) => {
                switch (socialMedia) {
                  case 'facebook':
                    return (
                      <SocialMediaItem
                        key={i}
                        socialMedia="facebook"
                        icon="facebook-f"
                        link={options.data.acf.facebook_url}
                        title={options.data.acf.facebook_message}
                        {...socialMediaItemOptions}
                      />
                    );
                    break;
                  case 'twitter':
                    return (
                      <SocialMediaItem
                        key={i}
                        socialMedia="twitter"
                        icon="twitter"
                        link={options.data.acf.twitter_url}
                        title={options.data.acf.twitter_message}
                        {...socialMediaItemOptions}
                      />
                    );
                    break;
                  case 'instagram':
                    return (
                      <SocialMediaItem
                        key={i}
                        socialMedia="instagram"
                        icon="instagram"
                        link={options.data.acf.instagram_url}
                        title={options.data.acf.instagram_message}
                        {...socialMediaItemOptions}
                      />
                    );
                    break;
                  case 'linkedin':
                    return (
                      <SocialMediaItem
                        key={i}
                        socialMedia="linkedin"
                        icon="linkedin-in"
                        link={options.data.acf.linkedin_url}
                        title={options.data.acf.linkedin_message}
                        {...socialMediaItemOptions}
                      />
                    );
                    break;
                  case 'google_plus':
                    return (
                      <SocialMediaItem
                        key={i}
                        socialMedia="google-plus"
                        icon="google-plus-g"
                        link={options.data.acf.google_plus_url}
                        title={options.data.acf.google_plus_message}
                        {...socialMediaItemOptions}
                      />
                    );
                    break;
                  case 'youtube':
                    return (
                      <SocialMediaItem
                        key={i}
                        socialMedia="youtube"
                        icon="youtube"
                        link={options.data.acf.youtube_url}
                        title={options.data.acf.youtube_message}
                        {...socialMediaItemOptions}
                      />
                    );
                    break;
                  case 'github':
                    return (
                      <SocialMediaItem
                        key={i}
                        socialMedia="github"
                        icon="github"
                        link={options.data.acf.github_url}
                        title={options.data.acf.github_message}
                        {...socialMediaItemOptions}
                      />
                    );
                    break;
                }
              })
            }
          </div>
        </div>
        <div className="scroll-down-icon-wrapper">
          <div className={"animated " + (isSectionActive ? 'slideInUp' : 'slideOutDown')}>
            <ScrollDownIcon title="Scroll Down" />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.options,
    page: state.page,
  }
}

Banner.propTypes = {
  isSectionActive: PropTypes.bool,
}

Banner.defaultProps = {
  isSectionActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
