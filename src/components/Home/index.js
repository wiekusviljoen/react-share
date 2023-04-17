import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import logo from '../images/logo.jpg'
import './index.scss'


const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = [
    'P',
    'e',
    't',
    'r',
    'u',
    's',
    'V',
    'i',
    'l',
    'j',
    'o',
    'e',
    'n',
  ]
  const jobArray = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          
          <h2>React / Html / CSS / Javascript</h2>
          
         
        </div>
        <img className='logo' src={logo} />
      </div>
      
      <Loader type="pacman" />
    </>
  )
}

export default Home
