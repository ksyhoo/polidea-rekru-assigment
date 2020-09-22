import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchRepositoriesState, Repository } from 'utils/types';
import { AppThunk } from 'store';
import { restWithAuth } from 'utils/octo-client';
import { normalizeResponse } from 'utils/helpers';

// TODO: move searchTerm and repositoryByOwner to it's own state slices, redux toolkit also has new api for api thunks and dev tool finally

const initialState: SearchRepositoriesState = {
  searchTerm: '',
  repositories: [],
  repositoryByOwner: {},
  isLoading: false,
  error: '',
};

export const searchRepositoriesSlice = createSlice({
  name: 'searchRepositories',
  initialState,
  reducers: {
    getRepositoryListSuccess: (
      state,
      { payload }: PayloadAction<Repository[]>
    ) => {
      state.repositories = payload;
    },
    getRepositorySuccess: (state, { payload }: PayloadAction<any>) => {
      state.repositoryByOwner = payload;
    },
    getRepositoriesLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    getRepositoriesError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setSearchTerm: (state, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
    },
  },
});

export const fetchRepositoriesList = (
  query: string,
  page = 1
): AppThunk => async (dispatch) => {
  try {
    dispatch(getRepositoriesError(''));
    if (query) {
      dispatch(getRepositoriesLoading(true));
      const { data } = await restWithAuth.search.repos({
        q: query,
        per_page: 10,
        page: page,
      });
      if (data.total_count) {
        dispatch(getRepositoryListSuccess(normalizeResponse(data.items)));
      } else {
        dispatch(getRepositoryListSuccess([]));
        dispatch(getRepositoriesError('No Records found for search query!'));
      }
    }
  } catch (err) {
    console.warn(err);
    dispatch(getRepositoriesError(err.toString()));
  }
  dispatch(getRepositoriesLoading(false));
};

export const fetchRepository = (
  repo: string,
  owner: string
): AppThunk => async (dispatch) => {
  try {
    dispatch(getRepositoriesLoading(true));

    //FIXME: check if  repo is in repositories list to save on one api call ;)
    const { data } = await restWithAuth.repos.get({
      repo,
      owner,
    });

    dispatch(getRepositorySuccess(data));
  } catch (err) {
    console.warn(err);
    dispatch(getRepositoriesError(err.toString()));
  }
  dispatch(getRepositoriesLoading(false));
};

const { actions } = searchRepositoriesSlice;
export const {
  getRepositorySuccess,
  getRepositoryListSuccess,
  getRepositoriesLoading,
  getRepositoriesError,
  setSearchTerm,
} = actions;

export default searchRepositoriesSlice.reducer;
