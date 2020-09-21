import React, { useEffect } from 'react';
import { Wrapper, StyledButton } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { SearchRepositoriesState, Repository } from 'utils/types';
import Repo from 'components/Repository';
import InfinityScroll from 'components/InfinityScroll';
import { useDebouncedCallback } from 'use-debounce/lib';
import {
  fetchRepositoriesList,
  getRepositorySuccess,
} from 'store/searchRepositories';
import { useDidMountEffect } from 'utils/hooks';
import WithLoading from 'components/Hoc/WithLoading';

interface Props {
  setLoading: (value: boolean) => void;
}

const Results: React.SFC<Props> = ({ setLoading }: Props) => {
  const dispatch = useDispatch();
  const {
    isLoading,
    error,
    repositories,
    searchTerm,
  }: SearchRepositoriesState = useSelector(
    (rootState: RootState) => rootState.searchRepositories
  );
  const showResults = !!repositories.length && !isLoading;

  const debounced = useDebouncedCallback((query: string) => {
    dispatch(fetchRepositoriesList(query));
  }, 300);

  useEffect(() => {
    setLoading(isLoading);
    dispatch(getRepositorySuccess({}));
  }, [setLoading, isLoading]);

  useDidMountEffect(() => {
    debounced.callback(searchTerm);
  }, [searchTerm, debounced]);

  const handleClick = () => dispatch(fetchRepositoriesList(searchTerm));

  // FIXME: Fix infinite scroll
  //   const loadMore = useCallback(() => {
  //     dispatch(fetchRepositoriesList('asd', 2));
  //   }, [repositories]);

  if (error) return <Wrapper>There was a problem: {error}</Wrapper>;

  return (
    <Wrapper>
      {showResults && (
        <StyledButton onClick={handleClick}>Refresh results</StyledButton>
      )}
      <InfinityScroll
        onEnd={() => null}
        data={repositories}
        renderItem={(data: Repository, key: number) => (
          <Repo repo={data} key={key} />
        )}
      />
    </Wrapper>
  );
};
export default WithLoading(Results);
