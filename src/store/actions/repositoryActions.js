import * as actionTypes from './actionTypes';
import axios from '../../tools/axios/axios';

///GET///
const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}
 
export const getData = (url, props) => {
    return (dispatch) => {
        return axios.get(url)
        .then(response => {
            dispatch(getDataSuccess(response.data));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}
