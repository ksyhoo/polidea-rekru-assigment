import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchRepositoriesState } from 'utils/types';
import { AppThunk } from 'store';
import { restWithAuth } from 'utils/octo-client';
import { normalizeResponse } from 'utils/helpers';

const initialState: SearchRepositoriesState = {
  repositories: [],
  isLoading: false,
  error: '',
};

export const searchRepositoriesSlice = createSlice({
  name: 'searchRepositories',
  initialState,
  reducers: {
    getRepositoriesSuccess: (state, { payload }: PayloadAction<any>) => {
      state.repositories = payload;
    },
    getRepositoriesLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    getRepositoriesError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const fetchRepositories = (query: string, page = 1): AppThunk => async (
  dispatch
) => {
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
        dispatch(getRepositoriesSuccess(normalizeResponse(data.items)));
      } else {
        dispatch(getRepositoriesSuccess([]));
        dispatch(getRepositoriesError('No Records found for search query!'));
      }
    }
  } catch (err) {
    console.warn(err);
    dispatch(getRepositoriesError(err.toString()));
  }
  dispatch(getRepositoriesLoading(false));
};

const { actions } = searchRepositoriesSlice;
export const {
  getRepositoriesSuccess,
  getRepositoriesLoading,
  getRepositoriesError,
} = actions;
