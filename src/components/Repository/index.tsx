import React from 'react';
import { RepositoryContainer, StyledText, Star, Heading } from './styled';
import { Repository } from 'utils/types';

type Props = {
  repo: Repository;
};

const Repo: React.SFC<Props> = ({
  repo: { name, owner, numberOfStars, primaryLanguage },
}: Props) => {
  return (
    <RepositoryContainer
      to={{
        pathname: `/repository/${name}/${owner.name}`,
      }}
    >
      <Heading fontSize={18} mb={12}>
        {name}
      </Heading>
      <StyledText fontSize={12}>
        {owner.name} / <span>{owner.type}</span>
      </StyledText>
      <StyledText fontSize={12}>{primaryLanguage}</StyledText>
      <Star>
        <StyledText fontSize={6}>{numberOfStars}</StyledText>
      </Star>
    </RepositoryContainer>
  );
};

export default Repo;
