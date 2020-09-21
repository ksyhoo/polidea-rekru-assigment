import React, { useEffect } from 'react';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import WithLoading from 'components/Hoc/WithLoading';

interface Props {
  setLoading: (value: boolean) => void;
}

const RepositoryDetailsPanel: React.SFC<Props> = ({ setLoading }: Props) => {
  const { repositoryByOwner, isLoading } = useSelector(
    (state: RootState) => state.searchRepositories
  );

  useEffect(() => {
    setLoading(isLoading);
  }, [setLoading, isLoading]);

  return <p>{repositoryByOwner && repositoryByOwner.id}</p>;
};

export default WithLoading(RepositoryDetailsPanel);
