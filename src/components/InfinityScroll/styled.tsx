import styled from 'styled-components';

// export const ListContainer = styled.section`
//   display: grid;
//   justify-content: center;
//   justify-items: center;
//   grid-template-columns: repeat(auto-fill, 300px);
//   grid-column-gap: 42px;
//   grid-row-gap: 42px;
//   margin: 32px 16px;
// `;

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
