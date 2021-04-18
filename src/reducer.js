import React from 'react'

function reducer(state,action) {
if(action.type==="ADD"){
    const newPeople=[...state.people,action.payload]
    return{
        ...state,
        people:newPeople,
        msgShow:true,
        msgtype:'success',
        msg:'you data added succesfully'

    }
    
}
if(action.type==="CLOSE_ALERT"){
    return{
        ...state,
        msgShow:false
    }
}
if(action.type==="EMPTY"){
    return{
        ...state,
        msgShow:true,
        msgtype:"warning",
        msg:"your field is empty !!"
    }
}
if(action.type==="DELETE"){
    const existedList=state.people.filter((item)=>item.id !==action.payload);
    console.log(existedList)
    return{
        ...state,
        people:existedList,
        msgShow:true,
        msgtype:"info",
        msg:"your data is deleted !!"

    }
}
if(action.type==="CLEAR"){
    return{
        ...state,
        people:[],
msgShow:true,
msgtype:'error',
msg:"you list is clear"   
 }
}

throw new Error('undefined type');

}

export default reducer
