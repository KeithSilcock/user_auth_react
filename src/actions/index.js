import types from './types';
import axios from 'axios';

const BASE_URL='http://api.reactprototypes.com'

export function signUp(cred) {
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}/signup`, cred)
        localStorage.setItem('token', response.data.token);

        dispatch({
            type:types.SIGN_UP
        })
    }
}
export function signIn(cred) {
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}/signin`, cred);

        localStorage.setItem('token', response.data.token);

        dispatch({
            type:types.SIGN_IN
        })
    }
}
//bro@bro.com
//bro
