import React, { useEffect } from 'react';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import WithLoading from 'components/Hoc/WithLoading';
import { StyledText, RepositoryContainer } from 'components/Repository/styled';

type Props = {
  setLoading: (value: boolean) => void;
};

const RepositoryDetailsPanel: React.SFC<Props> = ({ setLoading }: Props) => {
  const {
    searchRepositories: { repositoryByOwner, isLoading },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    setLoading(isLoading);
  }, [setLoading, isLoading]);

  return (
    <RepositoryContainer as="div">
      <StyledText fontSize={24}>
        NAME: <span>{repositoryByOwner.fullName}</span>
      </StyledText>
      <StyledText fontSize={24}>
        DESCRIPTION: <span>{repositoryByOwner.description}</span>
      </StyledText>
    </RepositoryContainer>
  );
};

export default WithLoading(RepositoryDetailsPanel);
