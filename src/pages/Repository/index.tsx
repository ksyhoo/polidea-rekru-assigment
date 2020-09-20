import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRepository } from 'store/searchRepositories';
import RepositoryDetailsPanel from 'components/RepositoryDetailsPanel';

const RepositoryDetails: React.SFC = () => {
  const dispatch = useDispatch();
  const { repo, owner } = useParams();

  useEffect(() => {
    dispatch(fetchRepository(repo, owner));
  }, [dispatch, repo, owner]);

  return <RepositoryDetailsPanel />;
};

export default RepositoryDetails;
