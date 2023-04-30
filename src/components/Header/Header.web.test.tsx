import React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Header } from './Header';
import { store } from "@demo/libs/store"
import { Provider } from 'react-redux'

test('Header renders correctly', () => {
  const { container } = render(<Provider store={store}>
    <Header>Click me</Header>
  </Provider>);
  expect(container).toMatchSnapshot();
});
