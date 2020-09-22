import { create } from 'react-test-renderer';
import React from 'react';
import Repo from '.';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const repo = {
  name: 'repo',
  owner: { name: ' owner', type: 'any' },
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

  test('shows the children when the checkbox is checked', () => {
    const testMessage = repo.name;
    render(<Component />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
