import React, { useState } from 'react';
import "./App.css"
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles({
  root:{
    backgroundColor:"rgb(200,210,000)",
    borderRadius:"15px",
    border:"0",
    color:"white",
    padding:"10px"
  }
})

const ButtonStyled=()=>{
  const classes=useStyles();
  return <Button className={classes.root}>jo</Button>

}
function App() {
 const [checked,setchecked]=useState(true);
 const classes=useStyles();
 console.log(classes);
  return (
    <div className="App">
    <p>
    my app

    </p>
    <ButtonStyled/>
    <TextField variant="outlined" type="date"
      color="secondary" margin="4"
    /> <br/>
        <TextField variant="outlined" type="time"
      color="secondary"
    /> <br/>
        <TextField variant="outlined" type="email"
        label="email"
        placeholder="enter email"
      color="secondary"
    /> <br/>


    <ButtonGroup  size="large" color="primary" >
    <Button variant="contained" 
startIcon={<SaveIcon/>}>Save</Button>
<Button variant="contained" 
startIcon={<DeleteIcon/>} size="large">Delete</Button>
    </ButtonGroup>
      
    </div>
  )
}

export default App
