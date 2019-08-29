import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';






class TeamList extends Component { 


  constructor(props) {
    super(props);
      this.state = {
       data:null,
       dataToDisplay:null,
       filterValue:''
      };

      this.apiBaseUrl = "http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/";
  }



handleChange = (event) => {
  
    var dataToDisplayTemp = this.state.data;
    dataToDisplayTemp = dataToDisplayTemp.filter( item => {
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({dataToDisplay: dataToDisplayTemp,filterValue:event.target.value});
  }

  componentDidMount(){
  

    axios.get(this.apiBaseUrl)
    
    .then(
      (result) => {

        let data_arr = []
        let temp = result.data;

        data_arr = temp.map(x => x)
        this.setState({
          data: data_arr,
          dataToDisplay:data_arr
        });
      }).catch(function (error) {
        console.log(error);
      });


  }



  render(){
  
    if (this.state.data != null){
    return (
   
      <div>

          <form noValidate autoComplete="off">
                <TextField
                  id="outlined-name"
                  label="Filter"
                  value={this.state.filterValue}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                />
          </form>



        <Table >

            <th>
                <TableRow>
                  <TableCell>Team id</TableCell>
                  <TableCell>Name</TableCell>
                </TableRow>
            </th>

            <TableBody style={{borderBottom: "none" }}>
                {this.state.dataToDisplay.map((item,i) => (
                  <TableRow key={i}>
                      <Link to={{pathname:`/team/${item.id}`}} style={{ textDecoration: 'none' }}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.name}</TableCell>
                      </Link>
                  </TableRow>
                  ))}
            </TableBody>
        </Table> 

        </div>
  );
  }
  else{

    return(
      <p>null</p>
    )
  }

}
}

export default TeamList;
