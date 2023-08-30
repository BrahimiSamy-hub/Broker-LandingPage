import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fonctionalité from './components/Fonctionalité'
import Tarifs from './components/Tarifs'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Fonctionalité />
      <Tarifs />
      <Footer />
    </div>
  )
}

export default App
