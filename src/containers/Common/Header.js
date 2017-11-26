import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import { fetchMenu } from '../../actions/menu';
import MenuItem from '../../components/Header/MenuItem';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  componentWillMount() {
    this.props.dispatch(fetchMenu('primary'));
  }
  handleNavBarToggle() {
    this.setState({isOpen: !this.state.isOpen});
  }
  handleMenuItems() {
    const { menu } = this.props;

    return (
      menu.data.length
        ?
        menu.data.map((data, i) =>
          data.menuLocation === 'primary'
            ?
            data.menuStructure.map((menuStructure, i) =>
              <MenuItem
                key={i}
                menu={menuStructure}
              />
            )
            : ''
        )
        : ''
    )
  }
  render() {
    const { isOpen } = this.state;

    return (
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand to="/" tag={Link}>
            {JOVANI_CODES.siteName}
          </NavbarBrand>
          <NavbarToggler onClick={::this.handleNavBarToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {::this.handleMenuItems()}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu
  }
}

export default connect(
  mapStateToProps
)(Header);