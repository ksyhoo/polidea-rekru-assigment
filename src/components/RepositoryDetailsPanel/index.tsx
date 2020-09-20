import React from 'react';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

const RepositoryDetailsPanel: React.SFC = () => {
  const { repositoryByOwner, isLoading } = useSelector(
    (state: RootState) => state.searchRepositories
  );

  return <p>{repositoryByOwner.id}</p>;
};

export default RepositoryDetailsPanel;
