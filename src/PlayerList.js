import React, {Component} from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayerName from './PlayerName';
import TextField from '@material-ui/core/TextField';



class PlayerList extends Component { 


  constructor(props) {

    super(props);

      this.state = {
          data:null,
          members:null,
          namesToDisplay:[],
          filterValue:'',
          memberNames:[]
      };
      this.apiBaseUrl = "http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/";
      this.apiBaseUrlPlayer = "http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/";

  }


handleChange = (event) => {

  var dataToDisplayTemp = this.state.memberNames;

  dataToDisplayTemp = dataToDisplayTemp.filter( item => {
    return item.toLowerCase().search(
      event.target.value.toLowerCase()) !== -1;
  });
  console.log(dataToDisplayTemp)
  this.setState({namesToDisplay: dataToDisplayTemp,filterValue:event.target.value});
}


getPlayerName = (id) => {
  let url2 = this.apiBaseUrlPlayer + id;
  return axios.get(url2)

}

  componentDidMount(){

  let url = this.apiBaseUrl + this.props.match.params.id;

    axios.get(url).then(

      (result) => {

          let temp = result.data;
          let mem_temp = result.data.members;
          let mem_arr = [];
          mem_arr = mem_temp.map(y => y)

          this.setState({
            data: temp,
            members: mem_arr
          });

    
          return mem_arr;
  
        })
            
    .then(
      result => {
        var myCalls = result.map( x => {
          return this.getPlayerName(x)
        })

        return Promise.all(myCalls)
        })
    
    .then(
          arraydata => {

            let final = arraydata.map(x => x)
            let final_names = final.map(x => x.data.name);
      
            this.setState({memberNames:final_names,namesToDisplay:final_names})

          })
          
    .catch(function (error) {
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


   
        <Table style={{width:'300px'}}>
        <TableHead>
        <TableRow>
          <TableCell >Team Name: {this.state.data.name} </TableCell>
          </TableRow>
          <TableRow>
          <TableRow>
          <TableCell >Team Lead: <PlayerName id={this.state.data.lead} /> </TableCell>
          </TableRow>

        

          <TableRow>
          <TableCell>Players:</TableCell>
          </TableRow>
        </TableRow>
        </TableHead>



        <TableBody>

        {this.state.namesToDisplay.map((item,i) => (
            <TableRow key={i}>
            <TableCell>{item}</TableCell>
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

export default PlayerList;
