import React, { useEffect } from 'react'
import Alert from '@material-ui/lab/Alert'

function Alertmsg({msg,msgtype,closeAlert}) {
    useEffect(()=>{
     setTimeout(()=>{
closeAlert()
     },2000)   
    })
        return (
        <>
            <Alert severity={msgtype}>{msg}</Alert>   
        </>
    )
}

export default Alertmsg
