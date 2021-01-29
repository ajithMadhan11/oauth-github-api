import logo from './logo.svg';
import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Github from './Github'
import Header from './Components/Header'
import Auth0lock from 'auth0-lock'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps={
    clientID:'W545un0wUsCPjrrSf5kzc4oLuv97Gja1',
    domain:'ajithmadhan.us.auth0.com'
  }

  componentWillMount(){
      console.log(this.state)
    this.lock = new Auth0lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult);

      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }
        // console.log(profile);

        this.setProfile(authResult.accessToken, profile);

      });

    });
    this.getProfile();
  }

  setProfile(idToken, profile){
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile(){
    if(localStorage.getItem('idToken') != null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state);
      });
    }
  }


  showLock(){
    this.lock.show();
  }
logout(){
  this.setState({
    idToken: '',
    profile: ''

  } ,()=>{
    localStorage.removeItem('idToken')
    localStorage.removeItem('profile')
  });

}
  render(){
    let gitty;
    if(this.state.idToken){
      gitty=  <Github/>;
      console.log(this.state)
    }else {
      gitty="Please login to continue";
    }
    return(
      <div>
      <div className="App">
        <Header
          lock={this.lock}
          idToken={this.state.idToken}
          profile={this.state.profile}
          onLogin={this.showLock.bind(this)}
          onLogout={this.logout.bind(this)}
        />
      {gitty}
      </div>
      </div>
    );
  }
}
export default App;
