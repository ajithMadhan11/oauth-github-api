import React ,{Component} from 'react'
import Profile from './Components/Profile'
import Search from './Components/Search'


const API="https://api.github.com/users"

class Github extends Component {
  constructor(props){
    super(props);

    this.state = {
      username:'ajithmadhan11',
      name:'',
      avatar:'',
      repos:'',
      followers:'',
      following:'',
      homeURL:'',
      notfound:''
    };
  }
  getProfile(username){
    let finalUrl=`${API}/${username}`;
    fetch(finalUrl)
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({
        username:data.login,
        name:data.name,
        avatar:data.avatar_url,
        repos:data.public_repos,
        followers:data.followers,
        following:data.following,
        homeURL:data.html_url,
        error:data.message
      })
    })
    .catch((error)=>console.log('error'))
  }
  componentDidMount(){
    this.getProfile(this.state.username);
  }
  render(){
    return(
      <div>
      <section id="card">
        <Search userProfile={this.getProfile.bind(this)}/>
        {console.log(this.state)}
        <Profile userData={this.state}/>
      </section>
      </div>
    );
  }
}

export default Github;
