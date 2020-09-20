import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(p) => p.theme.colors.gray};
  height: 100%;
  padding: ${(p) => p.theme.spacing.large};
`;

export const RepositoriesContainer = styled.div`
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
