import { IconButton, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
    iconbtn:{
        color:theme.palette.error.dark
    }
}))
function Listitem({item,Deletebtn}) {
    // console.log(item)
const classes=useStyles()
    return (
        <>
          <ListItem button>
    <ListItemText primary={item.text}>
    </ListItemText>
    
    <IconButton onClick={()=>Deletebtn(item.id)} className={classes.iconbtn}>
        <DeleteIcon/>
    </IconButton>
</ListItem>  
        </>
    )
}

export default Listitem;
