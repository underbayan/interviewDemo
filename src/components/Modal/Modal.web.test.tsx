import React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Modal } from './Modal';
import { store } from "@demo/libs/store"
import { Provider } from 'react-redux'

test('Modal renders correctly', () => {
  const { container } = render(<Provider store={store}>
    <Modal>Click me</Modal>
  </Provider>);
  expect(container).toMatchSnapshot();
});
