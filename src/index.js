import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Counter from './store/reducers/counter';
import Result from './store/reducers/results';
import registerServiceWorker from './registerServiceWorker';
const rootReducer = combineReducers({
    ctr: Counter,
    res:  Result
 })
 const logger = store => {
    return next => {
        return action => {
            console.log('Middleware Dispatching', action);
           const result = next(action);
           console.log('[middleware next state]', store.getState())
           return result;
        }
    } 
}
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger, thunk)))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
