import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import mapDispatchToProps from '../actions';
import Header from './Common/Header';
import Footer from './Common/Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchOptions } = this.props;

    fetchOptions();
  }
  handleComponent(matchProps) {
    const {
      component: Content,
      options
    } = this.props;

    if (!options.isLoading && options.isSuccess) {
      return (
        <Content {...matchProps} />
      )
    } else {
      return <div />;
    }
  }
  render() {
    const { component, ...rest } = this.props;

    return (
      <Route {...rest} render={::this.handleComponent} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.options
  };
}

Layout.propTypes={
  component: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
