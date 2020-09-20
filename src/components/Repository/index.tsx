import React from 'react';
import { Wrapper, StyledText, Star, Heading } from './styled';
import { Repository } from 'utils/types';

interface Props {
  repo: Repository;
}

const Repo: React.SFC<Props> = ({
  repo: { id, name, owner, numberOfStars, primaryLanguage },
}: Props) => {
  return (
    <Wrapper
      to={{
        pathname: `/repository:${id}`,
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
    </Wrapper>
  );
};

export default Repo;
