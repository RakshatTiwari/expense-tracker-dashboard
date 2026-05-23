import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MainContextAPI } from './context/mainContextAPI.jsx'
import ExpensePieChart from "./components/ExpensePieChart";

createRoot(document.getElementById('root')).render(
  <MainContextAPI>
    <App />
  </MainContextAPI>,
)
