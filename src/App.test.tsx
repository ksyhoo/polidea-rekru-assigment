import { create } from 'react-test-renderer';
import React, { Suspense } from 'react';
import App from 'App';

describe('AppComponent', () => {
  it('rendered lazily', async () => {
    const root = create(
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    );

    await App;
    expect(root).toMatchSnapshot();
  });
});
