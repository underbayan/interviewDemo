import React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Slogan } from './Slogan';
import { store } from "@demo/libs/store"
import { Provider } from 'react-redux'

test('Header renders correctly', () => {
  const { container } = render(<Provider store={store}>
    <Slogan></Slogan>
  </Provider>);
  expect(container).toMatchSnapshot();
});
