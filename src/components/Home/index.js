import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I am Petrus Viljoen
          <br />
          Web Developer
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
