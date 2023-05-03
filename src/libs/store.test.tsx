import { createStore, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux'

import { renderHook, act } from '@testing-library/react-hooks'
import { store, useI18n, useEnv, useUpdateEnv, EnvUpdatePayload } from './store'

describe('Store test cases', () => {

  // Test for useI18n
  it('useI18n returns the correct value', () => {
    const { result } = renderHook(() => useI18n(), {
      wrapper: ({ children }) => <Provider store={store} > {children} </Provider>
    })
    expect(result.current).toBe(store.getState().env.strings)
  })

  // Test for useEnv
  it('useEnv returns the correct value', () => {
    const { result } = renderHook(() => useEnv(), { wrapper: ({ children }) => <Provider store={store} > {children} </Provider> })
    expect(result.current).toBe(store.getState().env)
  })
})

