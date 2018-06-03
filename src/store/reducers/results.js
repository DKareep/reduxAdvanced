// import * as actionTypes from '../actions';
import {updateObject} from '../utility';
const initialState = {
    results: []
}

const deleteResult = (state, action ) => {
    const updatedArray = state.results.filter((result) => result.id !== action.resultID)
}
const results = (state = initialState, action) => {
    switch(action.type) {
        case 'STORE_RESULT':return updateObject(state, { results: state.results.concat({id: new Date(), value: action.val}) })
        case 'DELETE_RESULT': return deleteResult(state,action);
   
        default:
            return state;
    }
    
    
}

export default results;