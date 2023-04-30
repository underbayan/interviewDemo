import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Button } from './Button';
test('Button renders correctly', () => {
  const { container } = render(<Button text="Click me"></Button>);
  expect(container).toMatchSnapshot();
});
