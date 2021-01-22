import React ,{Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Header extends Component {

    onLogin(){
      this.props.onLogin();
    }

  render(){
    return(
      <Navbar bg="light">
          <Navbar.Brand href="#home">Github Searcher</Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
            <NavItem onClick={this.onLogin.bind(this)} href="#login">Login</NavItem>
            </Nav>
  </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Header;
