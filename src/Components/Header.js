import React ,{Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Header extends Component {

    onLogin(){
      this.props.onLogin();
    }
    onLogout(){
      this.props.onLogout();
    }

  render(){
    let statusBtn;
    if(this.props.idToken ==''){
      statusBtn=  <NavItem onClick={this.onLogin.bind(this)} href="#login">Login</NavItem>
    }else{
      statusBtn=  <NavItem onClick={this.onLogout.bind(this)} href="#login">Logout</NavItem>
    }
    return(

      <Navbar bg="light">
          <Navbar.Brand href="#home">Github Searcher</Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                  {statusBtn}
            </Nav>
  </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Header;
