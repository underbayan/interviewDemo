import { createSlice, configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { environment } from "./environment"
import { Dispatch, AnyAction } from 'redux'
export type RootState = ReturnType<typeof store.getState>

const envSlice = createSlice({
  name: 'env',
  initialState: environment,
  reducers: {

    updateEnv(state, action) {

      const newState = { ...state, ...action?.payload }
      if (action?.payload?.lang) newState.strings = newState.langMap[action.payload?.lang]
      return newState
    }
  }
})
export const store = configureStore({
  reducer: {
    env: envSlice.reducer
  },
})
interface EnvUpdatePayload {
  lang?: string
  [key: string]: any
}




export const useI18n = () => useSelector((state: RootState) => state.env.strings)
export const useEnv = () => useSelector((state: RootState) => state.env)
export const useUpdateEnv = (): ((env: EnvUpdatePayload) => void) => {
  const dispatch = useDispatch()

  const updateEnvAsync = (env: EnvUpdatePayload) => (dispatch: Dispatch) => {
    setTimeout(() => { dispatch(envSlice.actions.updateEnv(env)) }, 15)
  }

  return (env: EnvUpdatePayload) => dispatch(updateEnvAsync(env) as unknown as AnyAction)
}


