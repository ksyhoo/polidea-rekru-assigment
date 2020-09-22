import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 25px;

  @media (min-width: 562px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  } ;
`;
