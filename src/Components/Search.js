import React ,{Component} from 'react';




class Search extends Component {
  submitForm(e){
      e.preventDefault();
      let userName=this.textInput.value;
      this.props.userProfile(userName)
      this.textInput.value='';
  }
  render(){
    return(
      <div className="search-box">
          <form onSubmit={this.submitForm.bind(this)}>
              <label><input type="search" placeholder="Enter Username" ref={e => this.textInput = e}/></label>
          </form>
      </div>
    );
  }
}

export default Search;
