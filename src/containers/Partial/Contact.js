import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapDispatchToProps from '../../actions';
import CircleIcon from '../../components/CircleIcon';
import SocialMediaItem from '../../components/SocialMediaItem';
import LogoSpeech from '../../components/LogoSpeech';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      options,
      isSectionActive
    } = this.props;
    const socialMediaItemOptions = {
      hexagonColor: "#34231b",
      iconColor: "#da4d2f"
    };

    return (
      <section className="contact-section vertical-align-middle background-tertiary">
        <Container>
          <Row>
            <Col xs="12">
              <h2 className={"section-title color-white animated " +
                (isSectionActive ? 'fadeInUp' : 'fadeOutDown')}
              >
                Contact Me
              </h2>
              <p className={"section-description color-dark-brown animated " +
                (isSectionActive ? 'fadeIn' : 'fadeOut')}
              >
                Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              </p>
              <div className="contact-details">
                <Row>
                  <Col xs="12" sm="4">
                    <div className="contact-info text-center">
                      <div className={"animated " + (isSectionActive ? 'zoomIn' : 'zoomOut')}>
                        <CircleIcon
                          icon="phone"
                          link="tel:09123456789"
                          title=""
                        />
                      </div>
                      <a href="tel:09123456789" className="contact-link color-white">
                        09123456789
                      </a>
                    </div>
                  </Col>
                  <Col xs="12" sm="4">
                    <div className="contact-info text-center">
                      <div className={"animated " + (isSectionActive ? 'zoomIn' : 'zoomOut')}>
                        <CircleIcon
                          icon="envelope"
                          link="mailto:jovani@example.com"
                          title=""
                        />
                      </div>
                      <a href="mailto:jovani@example.com" className="contact-link color-white">
                        jovani@example.com
                      </a>
                    </div>
                  </Col>
                  <Col xs="12" sm="4">
                    <div className="contact-info text-center">
                      <div className={"animated " + (isSectionActive ? 'zoomIn' : 'zoomOut')}>
                        <CircleIcon icon="map-marker"
                          link="https://www.google.com/maps"
                          target="_blank"
                          title=""
                        />
                      </div>
                      <a href="https://www.google.com/maps" className="contact-link color-white" target="_blank">
                        Quezon City, Philippines
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="social-contact">
                <h2 className={"section-title color-white animated " +
                  (isSectionActive ? 'fadeInUp' : 'fadeOutDown')}
                >
                  Let&#39;s Keep in Touch
                </h2>
                <div className="social-media-menu">
                  <div className={"animated " + (isSectionActive ? 'rubberBand' : 'fadeOut')}>
                    {
                      Object.keys(options.data).length > 0 && options.data.constructor === Object &&
                      options.data.acf.social_medias.map((socialMedia, i) => {
                        switch (socialMedia) {
                          case 'facebook':
                            return (
                              <SocialMediaItem
                                key={i}
                                socialMedia="facebook"
                                icon="facebook"
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
                                icon="linkedin"
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
                                icon="google-plus"
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
                                icon="youtube-play"
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
              </div>
            </Col>
          </Row>
        </Container>
        <div className="logo-speech-wrapper d-none d-md-block">
          <LogoSpeech speech="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus." />
        </div>
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

Contact.propTypes = {
  isSectionActive: PropTypes.bool,
}

Contact.defaultProps = {
  isSectionActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
