import axios from 'axios';
import { EDIT, EDIT_FAIL, EDIT_SUCCESS } from './ActionTypes';
import UrlProvider from '../common/UrlProvider';

const axiosConfig = {
  headers: { 'Content-Type': 'application/json' },
};

const fetchCategory = () => ({
  type: EDIT,
});

const fetchCategorySuccess = data => ({
  type: EDIT_SUCCESS,
  payload: data,
});

const editError = error => ({
  type: EDIT_FAIL,
  error,
});

const editParameters = data => (dispatch) => {
  dispatch(fetchCategory());
  return axios.patch(UrlProvider.getPath('categories'), data, axiosConfig)
    .then((response) => {
      dispatch(fetchCategorySuccess(response));
    })
    .catch((error) => {
      dispatch(editError(error));
    });
};

export default editParameters;
