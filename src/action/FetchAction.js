import axios from 'axios';
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './ActionTypes';

export function fetchCategory() {
  return {
    type: FETCH_INIT,
  };
}

export function fetchCategorySuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
}

export function fetch() {
  return (dispatch) => {
    dispatch(fetchCategory());
    return axios.get('http://localhost:8080/api/categories').then((response) => {
      dispatch(fetchCategorySuccess(response.data));
    });
  };
}
