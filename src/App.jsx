import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Card/>

      {/** Set the routes here on App.js */}
      <Router>
        <Routes/>
      </Router>
    </>
  )
}

export default App;
