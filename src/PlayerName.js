import React, {Component} from 'react';
import axios from 'axios';


// Simple component used to retrieve an individual player's name
// based on id passed to component via standard props



class PlayerName extends Component { 


  constructor(props) {
    super(props);
      this.state = {
       data:null
      };
      this.apiBaseUrl = "https://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/";
   
  }



  componentDidMount(){
  
    let url = this.apiBaseUrl + this.props.id;


    axios.get(url)
    
    .then(
      (result) => {

        let temp = result.data;

        this.setState({
          data: temp
        });
      }).catch(function (error) {
        console.log(error);
      });

  
  }



  render(){
  
    if (this.state.data != null){
    return (
        this.state.data.name
  );
  }
  else{
    return(
      <p>null</p>
    )
  }
}
}

export default PlayerName;
