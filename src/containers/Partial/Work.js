import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import mapDispatchToProps from '../../actions';
import PrevArrow from '../../components/PrevArrow';
import NextArrow from '../../components/NextArrow';
import WorkSlideItem from '../../components/Work/WorkSlideItem';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0
    };
  }
  componentWillMount() {
    const { fetchPosts } = this.props;

    fetchPosts('work');
  }
  handleAfterChange(event) {
    this.setState({activeSlide: event});
  }
  render() {
    const {
      post,
      isSectionActive
    } = this.props;
    const { activeSlide } = this.state;
    const slickOptions = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      afterChange: ::this.handleAfterChange
    };

    return (
      <section className="work-section background-secondary">
        {
          'work' in post.allPosts &&
          post.allPosts.work.length > 0 &&
          <Slider
            {...slickOptions}
            swipe={post.allPosts.work.length > 1}
            infinite={post.allPosts.work.length > 1}
            dots={post.allPosts.work.length > 1}
            arrows={post.allPosts.work.length > 1}
          >
            {
              post.allPosts.work.map((postData, i) =>
                <div key={i} className="work-content">
                  <div class="work-slide-item-wrapper">
                    <div className={"animated " +
                      (isSectionActive ? 'fadeInUpBig' : 'fadeOutDownBig')}
                    >
                      <WorkSlideItem
                        title={postData.title.rendered}
                        image={postData.acf.preview_image.url}
                        description={postData.acf.description}
                        siteLink={postData.acf.site_url}
                        githubLink={postData.acf.github_url}
                        isSlideActive={activeSlide === i}
                      />
                    </div>
                  </div>
                </div>
              )
            }
          </Slider>
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.options,
    page: state.page,
    post: state.post
  }
}

Work.propTypes = {
  isSectionActive: PropTypes.bool,
}

Work.defaultProps = {
  isSectionActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
