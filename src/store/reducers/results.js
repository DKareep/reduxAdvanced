// import * as actionTypes from '../actions';

const initialState = {
    results: []
}


const results = (state = initialState, action) => {
    switch(action.type) {
        case 'STORE_RESULT':
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: action.val})    
        }
        case 'DELETE_RESULT': 
        // const newArray = [...results];
        // newArray.splice(id, 1)
        // return newArray;
        const updatedArray = state.results.filter((result) => result.id !== action.resultID)
        return {
            ...state,
            results: updatedArray
        }
        default:
            return state;
    }
    
    
}

export default results;