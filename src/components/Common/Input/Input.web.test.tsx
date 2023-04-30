import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Input } from './Input';
import { store } from "@demo/libs/store"
import { Provider } from 'react-redux'

test('Input renders correctly', () => {
  const { container } = render(<Provider store={store}>
    <Input></Input>
  </Provider>);
  expect(container).toMatchSnapshot();
});
