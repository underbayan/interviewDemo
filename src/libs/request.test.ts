import { abortableFetch, AbortableKey } from './request'
import { describe, it, expect, vi } from 'vitest';

describe('abortableFetch', () => {
  it('should fetch data successfully', async () => {
    const data = { message: 'Hello, World!' }
    const mockFetch = Promise.resolve({
      status: 200,
      statusText: 'OK',
      headers: { get: () => 'application/json', 'Content-Type': 'application/json' },
      json: () => Promise.resolve(data),
    })
    vi.spyOn(global, 'fetch').mockImplementation(() => mockFetch)

    const fetchInstance = abortableFetch('https://example.com/api/data')
    const response = await fetchInstance
    expect(response.status).toEqual(200)
    expect(response.message).toEqual('OK')
    expect(response.data).toEqual(data)
    expect(fetchInstance[AbortableKey]).toBeInstanceOf(Function)

    global.fetch.mockRestore()
  })

  it('should cancel fetch request', async () => {
    const fetchInstance = abortableFetch('https://example.com/api/data',)
    fetchInstance[AbortableKey]()
    const response = await fetchInstance
    expect(response).toBe(undefined)
    global.fetch.mockRestore()
  })

  it('should handle fetch error', async () => {
    const mockFetch = Promise.reject(new Error('Fetch error'))
    vi.spyOn(global, 'fetch').mockImplementation(() => mockFetch)

    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { void 0 })

    const response = await abortableFetch('https://example.com/api/data')
    expect(response).toBeUndefined()
    expect(consoleError).toHaveBeenCalledTimes(1)

    global.fetch.mockRestore()
    console.error.mockRestore()
  })
})
