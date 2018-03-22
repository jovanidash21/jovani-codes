import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import mapDispatchToProps from '../../actions';
import SocialMediaItem from '../../components/SocialMediaItem';
import LogoSpeech from '../../components/LogoSpeech';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      options,
      isActive
    } = this.props;

    return (
      <section className="contact-section background-tertiary">
        <Container>
          <Row>
            <Col xs="12">
              <h2 className="section-title color-white">Contact</h2>
              <p className="section-description color-white">
                Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              </p>
              <div className="social-contact">
                <div className="social-media-menu">
                  <div className={"animated " + (isActive ? 'rubberBand' : 'fadeOut')}>
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
        <LogoSpeech speech="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus." />
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
  isActive: PropTypes.bool,
}

Contact.defaultProps = {
  isActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
