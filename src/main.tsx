import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutesComtainter from './routes/RoutesComtainter.tsx'
import { Provider } from 'react-redux/es/exports'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesComtainter />
    </Provider>
  </React.StrictMode>,
)
