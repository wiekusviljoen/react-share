import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
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
        <h2>Frontend Developer / Html / CSS / Javascript</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
