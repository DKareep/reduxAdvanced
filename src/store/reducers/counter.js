import * as actionTypes from '../actions';

const initialState = {
    counter : 0

}


const counter = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
        // const newState = Object.assign({}, state);
        // newState.counter = state.counter + 1;
        // return newState;

        return {
            ...state,
            counter: state.counter + 1
        }
        case 'DECREMENT':
        return {
            ...state,
            counter: state.counter - 1
        }
        case actionTypes.ADD:
        return {
            ...state,
            counter: state.counter + action.val
        }
        case actionTypes.SUBSTRACT:
        return {
            ...state,
            counter: state.counter - action.val
        }
           default:
            return state;
    }
    
    
}

export default counter;