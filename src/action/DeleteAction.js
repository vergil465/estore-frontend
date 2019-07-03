import axios from 'axios';
import { DELETE, DELETE_SUCCESS } from './ActionTypes';


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
    return axios.delete('http://localhost:8080/api/categories/', { axiosConfig, data }).then((response) => {
      dispatch(fetchCategorySuccess(response));
    }).catch((error) => {
      alert(error);
    });
  };
}
