import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import mapDispatchToProps from '../../actions';
import { CircleIcon } from '../../components/CircleIcon';
import { SocialMediaItem } from '../../components/SocialMediaItem';
import { LogoSpeech } from '../../components/LogoSpeech';

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
      iconColor: "#f26630"
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
              {
                'contact_description' in options.data.acf &&
                options.data.acf.contact_description.length > 0 &&
                <p className={"section-description color-white animated " +
                  (isSectionActive ? 'fadeIn' : 'fadeOut')}
                >
                  {ReactHtmlParser(options.data.acf.contact_description)}
                </p>
              }
              <div className="contact-details">
                <Row>
                  <Col xs="12" sm="4">
                    {
                      'contact_number' in options.data.acf &&
                      options.data.acf.contact_number.length > 0 &&
                      <div className="contact-info text-center">
                        <div className={"animated " + (isSectionActive ? 'zoomIn' : 'zoomOut')}>
                          <CircleIcon
                            icon="phone"
                            link={'tel:' + options.data.acf.contact_number}
                            title=""
                          />
                        </div>
                        <a href={'tel:' + options.data.acf.contact_number} className="contact-link color-white">
                          {options.data.acf.contact_number}
                        </a>
                      </div>
                    }
                  </Col>
                  <Col xs="12" sm="4">
                    {
                      'email' in options.data.acf &&
                      options.data.acf.email.length > 0 &&
                      <div className="contact-info text-center">
                        <div className={"animated " + (isSectionActive ? 'zoomIn' : 'zoomOut')}>
                          <CircleIcon
                            icon="envelope"
                            link={'mailto:' + options.data.acf.email}
                            title=""
                          />
                        </div>
                        <a href={'mailto:' + options.data.acf.email} className="contact-link color-white">
                          {options.data.acf.email}
                        </a>
                      </div>
                    }
                  </Col>
                  <Col xs="12" sm="4">
                    {
                      'address' in options.data.acf &&
                      options.data.acf.address.length > 0 &&
                      'google_maps_link' in options.data.acf &&
                      options.data.acf.google_maps_link.length > 0 &&
                      <div className="contact-info text-center">
                        <div className={"animated " + (isSectionActive ? 'zoomIn' : 'zoomOut')}>
                          <CircleIcon icon="map-marker"
                            link={options.data.acf.google_maps_link}
                            target="_blank"
                            title=""
                          />
                        </div>
                        <a href={options.data.acf.google_maps_link} className="contact-link color-white" target="_blank">
                          {options.data.acf.address}
                        </a>
                      </div>
                    }
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
                  <div className={"animated " + (isSectionActive ? 'flipInX' : 'flipOutX')}>
                    {
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
