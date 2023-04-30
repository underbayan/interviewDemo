import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Container } from './Container';
test('Container renders correctly', () => {
  const { container } = render(<Container>Click me</Container>);
  expect(container).toMatchSnapshot();
});
