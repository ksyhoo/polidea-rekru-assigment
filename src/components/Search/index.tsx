import React from 'react';
import { Wrapper, Input } from './styled';
import { useDispatch } from 'react-redux';
import { fetchRepositories } from 'store/searchRepositories';
import { useDebouncedCallback } from 'use-debounce';

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const debounced = useDebouncedCallback((query: string) => {
    dispatch(fetchRepositories(query));
  }, 300);

  return (
    <Wrapper>
      <Input
        placeholder="Type here to start searching"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          debounced.callback(e.target.value)
        }
      />
    </Wrapper>
  );
};

export default Search;
