import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import deleteParameters from './DeleteAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('category delete actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('should call expected actions when status ok', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      {
        ok: true,
        status: 200,
        json: () => [],
      }
    ));
    store.dispatch(deleteParameters()).then(() => {
      const storeActions = store.getActions();
      expect(storeActions[0].type).toEqual('DELETE');
      expect(storeActions[1].type).toEqual('DELETE_SUCCESS');
      expect(storeActions[1].payload).toEqual([]);
    });
  });

  it('should call expected actions when status not Ok', () => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.reject({ ok: false, status: 500, json: () => [] })
    );
    store.dispatch(deleteParameters()).then(() => {
      const storeActions = store.getActions();
      expect(storeActions.length).toBe(1);
      expect(storeActions[0].value).toEqual('DELETE');
    });
  });
});
