import styled from 'styled-components';

export const Input = styled.input`
  padding: ${(p) => `${p.theme.spacing.small}`};
  width: 100%;
  height: 100%;
  outline: none;
  text-align: center;
  border: none;
  border-radius: ${(p) => `${p.theme.borderRadius}`};
  box-shadow: 29px 28px 84px -9px rgba(173, 173, 173, 1);
  font-family: ${(p) => p.theme.font};
  font-size: 16px;
  color: ${(p) => p.theme.colors.black};
  transition: all 0.2s ease-in-out;

  ::placeholder {
    font-size: 24px;
  }

  &:focus,
  &:hover {
    box-shadow: 18px 17px 16px -10px rgba(0, 0, 0, 1);
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  margin: ${(p) => `${p.theme.spacing.large}`} auto;
  height: 50px;
  width: 50%;
`;
