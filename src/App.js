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
      idToken:'',
      profile:{}
    };

  }

    static defaultProps={
      clientID:'W545un0wUsCPjrrSf5kzc4oLuv97Gja1',
      domain:'ajithmadhan.us.auth0.com'
    }
    componentWillMount(){
        this.lock=new Auth0lock(this.props.clientID,this.props.domain);
        this.lock.on('authenticated',(authResult)=>{
          console.log(authResult)
        });
    }
showLock(){
  this.lock.show();
}
  render(){
    return(
      <div>
      <div className="App">
        <Header
          onLogin={this.showLock.bind(this)}

        />
        <Github/>
      </div>
      </div>
    );
  }
}
export default App;
