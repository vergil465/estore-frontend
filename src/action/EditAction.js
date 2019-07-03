import axios from 'axios';
import { EDIT, EDIT_FAIL, EDIT_SUCCESS } from './ActionTypes';


const axiosConfig = {
  headers: { 'Content-Type': 'application/json' },
};

export function fetchCategory() {
  return {
    type: EDIT,
  };
}

export function fetchCategorySuccess(data) {
  return {
    type: EDIT_SUCCESS,
    payload: data,
  };
}

export const editError = error => ({
  type: EDIT_FAIL,
  error,
});

export function editParameters(data) {
  return (dispatch) => {
    dispatch(fetchCategory());
    return axios.patch('http://localhost:8080/api/categories/', data, axiosConfig)
      .then((response) => {
        dispatch(fetchCategorySuccess(response));
      })
      .catch((error) => {
        dispatch(editError(error));
      });
  };
}
