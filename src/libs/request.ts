export interface FetchDataType {
  [key: string]: any
}

export interface AbortableFetchResponse extends Response {
  data?: FetchDataType | string | ArrayBuffer | Blob
  message: string
}

export interface AbortableFetchOptions extends RequestInit {
  abort?: AbortSignal
}

export interface AbortableFetchPromise extends Promise<AbortableFetchResponse> {
  [AbortableKey](): void
}

export const AbortableKey = Symbol.for('abortableKey')
export const abortableFetch = (
  url: string,
  options?: AbortableFetchOptions
): AbortableFetchPromise => {
  const { abort, ...fetchOptions } = options ?? {}
  const ab = new AbortController()
  const rt = (fetch(url, { ...fetchOptions, signal: abort ? abort : ab.signal }) as Promise<Response>)
    .then(async (response) => {
      const contentType = response.headers.get('content-type')
      let data: FetchDataType | undefined | string

      if (contentType?.includes('application/json')) {
        data = await response.json()
      } else if (contentType?.includes('application/text')) {
        data = await response.text()
      } else if (contentType?.includes('application/opaque')) {
        data = await response.blob()
      } else {
        data = await response.arrayBuffer()
      }

      const result: AbortableFetchResponse = {
        ...response,
        status: response.status,
        message: response.statusText,
        data,
      }
      return result
    })
    .catch((e) => console.error(e)) as AbortableFetchPromise

  Object.defineProperty(rt, AbortableKey, { value: () => ab.abort(), writable: false })

  return rt
}
