import { create } from 'react-test-renderer';
import React from 'react';
import Repo from '.';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { BrowserRouter } from 'react-router-dom';

describe('RepoComponent', () => {
  it('render Repo component', async () => {
    const wrapper = create(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Repo
            repo={{
              name: 'repo',
              owner: { name: ' owner', type: 'any' },
              numberOfStars: 22,
              primaryLanguage: 'Ponglish',
              id: 1,
            }}
          />
        </ThemeProvider>
      </BrowserRouter>
    ).toJSON();

    await Repo;
    expect(wrapper).toMatchSnapshot();
  });
});
