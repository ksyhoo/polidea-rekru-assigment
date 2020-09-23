import styled from 'styled-components';
import { Link } from 'react-router-dom';
import star from 'assets/star.png';

export const StyledText = styled.p<{ fontSize: number; mb?: number }>`
  font-size: ${(p) => `${p.fontSize}px`};
  color: ${(p) => p.theme.colors.black};
  margin: 3px;
  margin-bottom: ${(p) => `${p.mb}px`};
  font-weight: normal;
  span {
    color: ${(p) => p.theme.colors.secondary};
  }
`;

export const RepositoryContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
  padding: ${(p) => `${p.theme.spacing.large}`};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Star = styled.div`
  background: url(${star}) no-repeat center center;
  background-size: contain;
  height: 70px;
  width: 70px;
  ${StyledText} {
    color: ${(p) => p.theme.colors.white};
    font-size: 24px;
    line-height: 70px;
    text-align: center;
    text-shadow: 2px 2px ${(p) => p.theme.colors.accent};
  }
`;

export const Heading = styled(StyledText)`
  &:before {
    content: '';
    border: 2px solid ${(p) => p.theme.colors.accent};
    margin-right: 5px;
  }
`;
