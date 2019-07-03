import {
  ADD,
  ADD_FAIL,
  ADD_SUCCESS,
  DELETE,
  DELETE_FAIL,
  DELETE_SUCCESS,
  EDIT,
  EDIT_FAIL,
  EDIT_SUCCESS,
  FETCH_FAILURE,
  FETCH_INIT,
  FETCH_SUCCESS,
} from '../action/ActionTypes';

const initialState = {
  category: [],
  loader: true,
  errorMessages: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INIT:
    case ADD:
    case EDIT:
    case DELETE:
      return {
        ...state,
        loader: true,
        errorMessages: [],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loader: false,
        category: action.payload._embedded.categories,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        loader: false,
        category: state.category.concat(action.payload.data),
      };
    case EDIT_SUCCESS:
      let data = [];
      data = state.category.map((item) => {
        const updatedData = action.payload.data.find(updatedItem => updatedItem.id === item.id);
        return updatedData ? { ...item, ...updatedData } : item;
      });
      return {
        ...state,
        loader: false,
        category: data,
      };
    case DELETE_SUCCESS:
      let list = state.category;
      action.payload.data.map((item) => {
        list = list.filter(value => value.id !== item.id);
        return list;
      });

      return {
        ...state,
        loader: false,
        category: list,
      };
    case FETCH_FAILURE:
    case ADD_FAIL:
    case EDIT_FAIL:
    case DELETE_FAIL:
      return {
        ...state,
        loader: true,
        errorMessages: action.error.response.data.errors,
      };
    default:
      return state;
  }
}
