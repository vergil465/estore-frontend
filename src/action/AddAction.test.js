import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import addParameters from './AddAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('category add actions', () => {
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
    store.dispatch(addParameters()).then(() => {
      const storeActions = store.getActions();
      expect(storeActions[0].type).toEqual('ADD');
      expect(storeActions[1].type).toEqual('ADD_SUCCESS');
      expect(storeActions[1].payload).toEqual([]);
    });
  });

  it('should call expected actions when status not Ok', () => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.reject({ ok: false, status: 500, json: () => [] })
    );
    store.dispatch(addParameters()).then(() => {
      const storeActions = store.getActions();
      expect(storeActions.length).toBe(1);
      expect(storeActions[0].value).toEqual('ADD');
      expect(storeActions[1].value).toEqual('ADD_FAIL');
      expect(storeActions[1].payload).toEqual([]);
    });
  });
});
