import { describe, expect, it } from 'vitest';

import { render, screen } from '~/utils/test/renderers';

import Button from './Button';

describe('Button', () => {
  it('should display a button', () => {
    render(<Button type="button">Click Me</Button>);

    screen.debug();

    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
});
