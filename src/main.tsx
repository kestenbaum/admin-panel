import ReactDOM from 'react-dom/client'


import './index.css'
import { Provider } from './Provider'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)
