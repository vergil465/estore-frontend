import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import editParameters from './EditAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('category edit actions', () => {
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
    store.dispatch(editParameters()).then(() => {
      const storeActions = store.getActions();
      expect(storeActions[0].type).toEqual('EDIT');
      expect(storeActions[1].type).toEqual('EDIT_SUCCESS');
      expect(storeActions[1].payload).toEqual([]);
    });
  });

  it('should call expected actions when status not Ok', () => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.reject({ ok: false, status: 500, json: () => [] })
    );
    store.dispatch(editParameters()).then(() => {
      const storeActions = store.getActions();
      expect(storeActions.length).toBe(1);
      expect(storeActions[0].value).toEqual('EDIT');
      expect(storeActions[1].value).toEqual('EDIT_FAIL');
      expect(storeActions[1].payload).toEqual([]);
    });
  });
});
