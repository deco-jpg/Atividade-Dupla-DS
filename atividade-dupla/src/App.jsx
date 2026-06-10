import './App.css'
import { BrowserRouter } from 'react-router-dom' // Importe isso aqui!
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  )
}

export default App