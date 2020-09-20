import React from 'react';
import { Wrapper } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { SearchRepositoriesState, Repository } from 'utils/types';
import ClipLoader from 'react-spinners/ClipLoader';
import Repo from 'components/Repository';
import InfinityScroll from 'components/InfinityScroll';

const Results: React.SFC = () => {
  const {
    isLoading,
    error,
    repositories,
  }: SearchRepositoriesState = useSelector(
    (rootState: RootState) => rootState.searchRepositories
  );
  const showResults = !!repositories && !isLoading;

  // FIXME: Fix infinite scroll
  //   const loadMore = useCallback(() => {
  //     dispatch(fetchRepositories('asd', 2));
  //   }, [repositories]);

  if (error) return <Wrapper>There was a problem: {error}</Wrapper>;

  return (
    <Wrapper>
      {isLoading && <ClipLoader size={150} loading={isLoading} />}
      {showResults && (
        <InfinityScroll
          onEnd={() => null}
          data={repositories}
          renderItem={(data: Repository, key: number) => (
            <Repo repo={data} key={key} />
          )}
        />
      )}
    </Wrapper>
  );
};

export default Results;
