import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  return (
    <>
      <div className="containe contact-page">
        <div className="text-zone ">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
