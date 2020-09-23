import { create } from 'react-test-renderer';
import React from 'react';
import Repo from '.';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { StyledText } from './styled';

const repo = {
  name: 'repo',
  owner: { name: 'owner', type: 'any' },
  numberOfStars: 22,
  primaryLanguage: 'Ponglish',
  id: 1,
};

const Component = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Repo repo={repo} />
    </ThemeProvider>
  </BrowserRouter>
);

describe('RepoComponent', () => {
  it('render Repo component', async () => {
    const wrapper = create(<Component />).toJSON();

    await Repo;
    expect(wrapper).toMatchSnapshot();
  });

  test('render Repo component', () => {
    render(<Component />);
    expect(screen.getByText(repo.name)).toBeInTheDocument();
    expect(screen.getByText(`${repo.numberOfStars}`)).toBeInTheDocument();
    expect(screen.getByText(`${repo.owner.name} /`)).toBeInTheDocument();
    expect(screen.getByText(repo.owner.type)).toBeInTheDocument();
    expect(screen.getByText(repo.primaryLanguage)).toBeInTheDocument();
  });

  test('it applies styles according to passed props', () => {
    const wrapper = create(
      <ThemeProvider theme={theme}>
        <StyledText fontSize={12} mb={4} />
      </ThemeProvider>
    ).toJSON();
    expect(wrapper).toHaveStyleRule(
      'font-size',
      expect.stringContaining('12px')
    );
    expect(wrapper).toHaveStyleRule(
      'margin-bottom',
      expect.stringContaining('4px')
    );
  });
});
