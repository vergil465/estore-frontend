import axios from 'axios';
import { ADD, ADD_SUCCESS, ADD_FAIL } from './ActionTypes';
import UrlProvider from '../common/UrlProvider';


const axiosConfig = {
  headers: { 'Content-Type': 'application/json' },
};

export function addBegin() {
  return {
    type: ADD,
  };
}

export function addSuccess(data) {
  return {
    type: ADD_SUCCESS,
    payload: data,
  };
}

export const addError = error => ({
  type: ADD_FAIL,
  error,
});

export function addParameters(data) {
  return (dispatch) => {
    dispatch(addBegin());
    return axios.post(UrlProvider.getPath('categories'), data, axiosConfig)
      .then((response) => {
        dispatch(addSuccess(response));
      })
      .catch((error) => {
        dispatch(addError(error));
      });
  };
}
