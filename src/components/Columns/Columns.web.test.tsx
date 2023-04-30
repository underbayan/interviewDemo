import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { ColumnsTest } from './Columns';

test('ColumnsTest renders correctly', () => {
  const { container } = render(<ColumnsTest></ColumnsTest>);
  expect(container).toMatchSnapshot();
});
