import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fetch } from './FetchAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('category actions', () => {
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
    store.dispatch(fetch()).then(() => {
      const storeActions = store.getActions();
      expect(storeActions[0].type).toEqual('FETCH_INIT');
      expect(storeActions[1].type).toEqual('FETCH_SUCCESS');
      // expect(storeActions[1].payload).toEqual([]);
    });
  });
});
