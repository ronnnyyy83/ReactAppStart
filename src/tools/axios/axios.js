import axios from 'axios';
import * as constants from '../../constants';
 
const instance = axios.create({
    baseURL: constants.baseURL,
    headers: {
        
    }
});
 
export default instance;