import React, { Component } from 'react';


import {connect} from 'react-redux';
 
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

 
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubstractCounter}  />
                <div>
                    <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button> 
                    <ul>
                        {this.props.storedResults.map( (storedResult) => {
                       return <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                        })}
                                                                       </ul>  
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.ctr.counter,
        storedResults: state.res.results
        }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type:actionTypes.ADD, val: 10}),
        onSubstractCounter: () => dispatch({type: actionTypes.SUBSTRACT, val: 10}),
        onStoreResult: (result) => dispatch({type: 'STORE_RESULT', val: result}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultID: id})       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter) 
