
import './App.css'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import About from './pages/About'
import Hero from './pages/Hero'

function App() {
  

  return (
    <> 
    <Cursor/>
    <Navbar links={['Home', 'About', 'Projects', 'Contact']}/>
    <Hero/>
    <About/>
      
    </>
  )
}

export default App
