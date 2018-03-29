import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import mapDispatchToProps from '../../actions';
import WorkSlideItem from '../../components/Work/WorkSlideItem';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0
    };
  }
  handleAfterChange(event) {
    this.setState({activeSlide: event});
  }
  render() {
    const { isActive } = this.props;
    const slickOptions = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: ::this.handleAfterChange
    };

    return (
      <section className="work-section background-secondary">
        <Slider {...slickOptions}>
          <div className="work-content">
            <WorkSlideItem
              title="Work 1"
              description="Quisque velit nisi, pretium ut lacinia in, elementum id enim."
              link="http://example.com"
            />
          </div>
          <div className="work-content">
            <WorkSlideItem
              title="Work 2"
              description="Nulla quis lorem ut libero malesuada feugiat."
              link="http://example.com"
            />
          </div>
          <div className="work-content">
            <WorkSlideItem
              title="Work 3"
              description="Vivamus suscipit tortor eget felis porttitor volutpat."
              link="http://example.com"
            />
          </div>
          <div className="work-content">
            <WorkSlideItem
              title="Work 4"
              description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
              link="http://example.com"
            />
          </div>
          <div className="work-content">
            <WorkSlideItem
              title="Work 5"
              description="Cras ultricies ligula sed magna dictum porta."
              link="http://example.com"
            />
          </div>
          <div className="work-content">
            <WorkSlideItem
              title="Work 6"
              description="Donec sollicitudin molestie malesuada."
              link="http://example.com"
            />
          </div>
        </Slider>
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

Work.propTypes = {
  isActive: PropTypes.bool,
}

Work.defaultProps = {
  isActive: false,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
