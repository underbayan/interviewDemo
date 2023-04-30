// import { useState, useEffect } from 'react'
// import { abortableFetch } from '@demo/libs/request'

// export const useFetch = (url, options) => {
//   const [res, setRes] = useState({ status: 1, data: null, error, loading: true, errorMessage: "" })
//   useEffect(() => {
//     const fetchInstance = abortableFetch(url, options).then((response) => {
//       const { data, status } = response || {}
//       setRes({ data, statusCode, errorMessage: data?.errorMessage, error: statusCode !== 200, loading: false })
//     }).catch(e =>
//       setRes({ data, statusCode, errorMessage: data?.errorMessage, error: statusCode !== 200, loading: false })
//     )
//     return fetchInstance.abort
//   }, [url, options, setRes])
//   return [res]
// }