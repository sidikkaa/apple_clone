import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import {Footer} from './components/Footer'
import './index.css'
import Slide from './components/Slide';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <Header/>
  <Hero/>
  <Slide />
  <Footer/>

    </div>
  )
}

export default App
