import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Footer } from './Footer';
import { store } from "@demo/libs/store"
import { Provider } from 'react-redux'

test('Footer renders correctly', () => {
  const { container } = render(<Provider store={store}>
    <Footer>Click me</Footer>
  </Provider>);
  expect(container).toMatchSnapshot();
});
