import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem("sortTasks"));
var initialState = data ? data : {
    by: 'name',
    value: 1
};

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SORT:
            console.log(JSON.stringify(action))
            return action.sort;
        default: return state;
    }
}

export default myReducer;