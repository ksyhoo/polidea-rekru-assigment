import React from 'react';
import Search from 'components/Search';
import { Container } from 'utils/styled';
import RepositorySearchResults from 'modules/RepositorySearchResults';

const Landing: React.SFC = () => (
  <Container>
    <Search />
    <RepositorySearchResults />
  </Container>
);

export default Landing;
