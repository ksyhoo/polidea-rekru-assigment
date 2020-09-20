import React from 'react';
import Search from 'components/Search';
import Results from 'modules/Results';
import { Container } from 'utils/styled';

const Landing: React.SFC = () => (
  <Container>
    <Search />
    <Results />
  </Container>
);

export default Landing;
