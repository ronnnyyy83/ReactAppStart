import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: null
}

const executeGetDataSuccess = (state, action) => {
    return {
        ...state,
        data: action.data
    }
}

const repositoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_SUCCESS:
            return executeGetDataSuccess(state, action);
        default:
            return state;
    }
}
 
export default repositoryReducer;