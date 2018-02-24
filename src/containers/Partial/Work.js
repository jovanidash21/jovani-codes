import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import mapDispatchToProps from '../../actions';

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      options,
      page
    } = this.props;
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
          <div><h2 className="section-title">Work 1</h2></div>
          <div><h2 className="section-title">Work 2</h2></div>
          <div><h2 className="section-title">Work 3</h2></div>
          <div><h2 className="section-title">Work 4</h2></div>
          <div><h2 className="section-title">Work 5</h2></div>
          <div><h2 className="section-title">Work 6</h2></div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
