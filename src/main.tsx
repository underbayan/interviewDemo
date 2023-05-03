import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { default as ReactN } from 'react'
// TODO: react-refresh 
// TODO: polyfill per browsers.

import './main.scss'
import { store } from './libs/store'
import { Header, Footer, Container, Slogan, ColumnsTest } from "./components"
import { InviteButton } from "./experiences"


const APP = () => {
  return <Provider store={store}>
    <Header />
    <Container >
      <Slogan />
      <InviteButton />
    </Container>
    <ColumnsTest />  {/* ColumnsTest: Easter egg */}
    <Footer />
  </Provider>
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ReactN.StrictMode>
    <APP />
  </ReactN.StrictMode>
)
