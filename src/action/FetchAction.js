import axios from 'axios';
import {
  FETCH_INIT,
  FETCH_SUCCESS,
} from './ActionTypes';
import UrlProvider from '../common/UrlProvider';

const fetchCategory = () => ({
  type: FETCH_INIT,
});

const fetchCategorySuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetch = () => (dispatch) => {
  dispatch(fetchCategory());
  return axios.get(UrlProvider.getApiPath('categories')).then((response) => {
    dispatch(fetchCategorySuccess(response.data));
  });
};

export default fetch;
