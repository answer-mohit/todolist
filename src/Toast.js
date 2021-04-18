import { Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

const Component=({closeToast})=>{
    return(<div>
    <p>something wrong!!</p>
<Button onClick={closeToast} variant="contained">closed</Button>
    </div>)
}
function Toast() {
    const notify=()=>{
        toast('my message of toastify',{position:toast.POSITION.TOP_LEFT});
        toast.success('my message of success',{position:toast.POSITION.TOP_CENTER,autoClose:8000});
        toast.info('my message of info',{position:toast.POSITION.TOP_RIGHT,autoClose:false});
        toast.warn(<Component/>,{position:toast.POSITION.BOTTOM_CENTER});
        toast.error('my message of error',{position:toast.POSITION.BOTTOM_LEFT});
        toast('my message of toastify',{position:toast.POSITION.BOTTOM_RIGHT});

    }
    return (
        <Container maxWidth="sm">
<Typography variant="h2">Toast notifications</Typography>
<Button variant="contained" color="secondary" onClick={notify}>click me</Button>
       </Container>
    )
}

export default Toast
