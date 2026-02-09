import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import appStore from './utils/appStore';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </StrictMode>,
)
