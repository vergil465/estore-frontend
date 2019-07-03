import axios from 'axios';
import { ADD, ADD_SUCCESS, ADD_FAIL } from './ActionTypes';
import UrlProvider from '../common/UrlProvider';


const axiosConfig = {
  headers: { 'Content-Type': 'application/json' },
};

const addBegin = () => ({
  type: ADD,
});

const addSuccess = data => ({
  type: ADD_SUCCESS,
  payload: data,
});

const addError = error => ({
  type: ADD_FAIL,
  error,
});

const addParameters = data => (dispatch) => {
  dispatch(addBegin());
  return axios.post(UrlProvider.getPath('categories'), data, axiosConfig)
    .then((response) => {
      dispatch(addSuccess(response));
    })
    .catch((error) => {
      dispatch(addError(error));
    });
};
export default addParameters;
