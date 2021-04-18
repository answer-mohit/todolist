import { CssBaseline,Container, Paper, Typography, Box, TextField, Button, List } from '@material-ui/core'
import React, { useReducer, useState } from 'react'
import Navbar from './Navbar'
import {makeStyles} from '@material-ui/core/styles';
import Listitem from './Listitem';
import reducer from './reducer';
import Alertmsg from './Alertmsg';

const useStyles=makeStyles((theme)=>({
root:{
    backgroundColor:theme.palette.primary.light,
maxWidth:"100vw",
height:"100vh",
paddingTop:theme.spacing(5),
},
text:{
    color:theme.palette.error.main
},
btn:{
margin:theme.spacing(1),
textAlign:"center"
}
}));

const initialstate={
    people:[],
    msgShow:false,
    msg:'',
    msgtype:'',
    editData:''
}


function Main() {
    const classes=useStyles();
    const [text,setText]=useState('')
const [state,dispatch]=useReducer(reducer,initialstate)
const submitBtn=(e)=>{
e.preventDefault();
if(!text){
    dispatch({type:"EMPTY"});
}

if(text){
    const newItem={id:new Date().getTime().toString(),text}
    dispatch({type:"ADD",payload:newItem});
    return setText('');
}

}

const Deletebtn=(id)=>{
dispatch({type:"DELETE",payload:id});
}



const closeAlert=()=>{
    dispatch({type:"CLOSE_ALERT"});
}
const clearBtn=()=>{
    if(state.people.length>0){
       return dispatch({type:"CLEAR"})
    }
dispatch({type:"EMPTY"});
}

    return (
        <div>
        <CssBaseline/>
        <Navbar/>
<Container className={classes.root}>
    <Paper component={Box} p={3} my={3} width="50%" mx="auto" boxShadow={5}>
    {state.msgShow&& <Alertmsg msg={state.msg} msgtype={state.msgtype} closeAlert={closeAlert} /> }
        <Typography variant="h4" className={classes.text} align="center">
Todo list
        </Typography>
        <Box component="form" onSubmit={submitBtn}>
        <TextField id="outlined-basic" label="write something..." variant="outlined"
        fullWidth margin="dense" color="secondary" value={text} onChange={(e)=>setText(e.target.value)}/>
        <Box textAlign="center">
        <Button type="submit" color="primary" variant="contained"  className={classes.btn}>Add</Button>
        <Button color="secondary" variant="contained" onClick={clearBtn} className={classes.btn}>clear all</Button>
        </Box>
</Box>
<List>
{
    state.people.map(item=>{
        return(<Listitem key={item.id} item={item} Deletebtn={Deletebtn} /> )
    })
}
</List>


    </Paper>
</Container>
</div>
    )
}

export default Main
