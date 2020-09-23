import styled from 'styled-components';

export const ResultsContainer = styled.section<{ grayOut?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(p) => p.theme.colors.gray};
  height: 100%;
  margin: ${(p) => p.theme.spacing.large};
  &:after {
    z-index: 9999;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    ${({ grayOut }) =>
      grayOut ? `background: rgba(0, 0, 0, 0.1); content: "";` : ''}
  }
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
  cursor: pointer;
  background: ${(p) => p.theme.colors.gray};
  outline: none;
  border: none;
  padding: ${(p) => p.theme.spacing.medium};
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  margin: ${(p) => p.theme.spacing.large};

  &:hover {
    box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 1);
    transform: scale(1.1);
  }
`;
