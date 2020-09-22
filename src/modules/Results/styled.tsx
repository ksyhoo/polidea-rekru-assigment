import styled from 'styled-components';

export const ResultsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(p) => p.theme.colors.gray};
  height: 100%;
  padding: ${(p) => p.theme.spacing.large};
  margin-top: ${(p) => p.theme.spacing.xxlarge};
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

export const StyledButton = styled.button`
  background: ${(p) => p.theme.colors.gray};
  outline: none;
  border: none;
  padding: ${(p) => p.theme.spacing.medium};
  transition: all 0.2s ease-in-out;
  box-shadow: 29px 28px 84px -9px rgba(173, 173, 173, 1);
  margin-bottom: ${(p) => p.theme.spacing.medium};

  &:hover {
    box-shadow: 18px 17px 16px -10px rgba(0, 0, 0, 1);
    transform: scale(1.1);
  }
`;
