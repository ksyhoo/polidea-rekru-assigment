import searchRepositories, {
  getRepositoriesLoading,
} from './searchRepositories';
const initialState = {
  isLoading: true,
  searchTerm: '',
  repositories: [],
  error: '',
  repositoryByOwner: {},
};

describe('search repositories reducer', () => {
  it('initiate store', () => {
    expect(
      searchRepositories(initialState, {
        type: '',
        payload: {},
      })
    ).toEqual(initialState);
  });
});

it('set loading state to false', () => {
  expect(getRepositoriesLoading(false)).toEqual({
    payload: false,
    type: getRepositoriesLoading.type,
  });

  //TODO: test async action and fetch
});
