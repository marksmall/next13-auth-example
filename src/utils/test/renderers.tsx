import { ReactElement } from 'react';

import { RenderHookOptions, RenderHookResult, render, renderHook } from '@testing-library/react';

interface WrapperParams {
  children: ReactElement;
}

interface Options {
  initialEntries?: string[];
  renderHookOptions?: RenderHookOptions<unknown>;
}

const customRender = (ui: ReactElement, options?: Options) => {
  const { renderHookOptions } = options ?? {};

  return render(ui, {
    wrapper: ({ children }: WrapperParams): ReactElement => children,
    ...renderHookOptions,
  });
};

/**
 * Custom renderHook to replace renderHook from testing library
 *
 * @param callback - callback that wraps the hook being tested
 * @param options - An options object to modify the execution of renderHook
 *
 * @returns - object, see here for shape: https://react-hooks-testing-library.com/reference/api#renderhook-result
 */
const customRenderHook = <T, P>(
  callback: () => unknown,
  options?: Options,
): RenderHookResult<T, P> => {
  const { renderHookOptions } = options ?? {};

  const wrapper = ({ children }: WrapperParams): ReactElement => children;

  const utils = renderHook(() => callback(), { wrapper, ...renderHookOptions });
  return utils as RenderHookResult<T, P>;
};

// eslint-disable-next-line import/export
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
// eslint-disable-next-line import/export
export { customRender as render };
// overide renderHook export
// eslint-disable-next-line import/export
export { customRenderHook as renderHook };
