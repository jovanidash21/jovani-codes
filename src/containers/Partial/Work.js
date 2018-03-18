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
  }
  render() {
    const { isActive } = this.props;
    const slickOptions = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section className="work-section background-primary">
        <Slider {...slickOptions}>
          <div><WorkSlideItem title="Work 1" /></div>
          <div><WorkSlideItem title="Work 2" /></div>
          <div><WorkSlideItem title="Work 3" /></div>
          <div><WorkSlideItem title="Work 4" /></div>
          <div><WorkSlideItem title="Work 5" /></div>
          <div><WorkSlideItem title="Work 6" /></div>
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
