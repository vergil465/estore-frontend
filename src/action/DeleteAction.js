import axios from 'axios';
import { DELETE, DELETE_SUCCESS } from './ActionTypes';
import UrlProvider from '../common/UrlProvider';


const axiosConfig = {
  headers: { 'Content-Type': 'application/json' },
};

export function fetchCategory() {
  return {
    type: DELETE,
  };
}

export function fetchCategorySuccess(data) {
  return {
    type: DELETE_SUCCESS,
    payload: data,
  };
}

export function deleteParameters(data) {
  return (dispatch) => {
    dispatch(fetchCategory());
    return axios.delete(UrlProvider.getPath('categories'), { axiosConfig, data }).then((response) => {
      dispatch(fetchCategorySuccess(response));
    }).catch((error) => {
      alert(error);
    });
  };
}
