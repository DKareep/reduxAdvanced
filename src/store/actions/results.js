import * as actionTypes from './actionTypes';


export const saveResult = (value) => {
    return {
        type: actionTypes.STORE_RESULT,
        val: value
    }
}

export const storeResult = (value) => {

    return (dispatch,getState) => {
        setTimeout(()=> {
            // const Counter = getState().ctr.counter ;
            // console.log(Counter);
            dispatch(saveResult(value))
        }, 2000)
       
    }
  
}


export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultID: id
    }
}