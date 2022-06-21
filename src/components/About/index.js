import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am ambitious and creative. I am a team player and I also treat my
          team with respect. I am good with time management and I am goal
          driven.
        </p>
        <p>
          I work well under pressure. I can take criticism well and improve
          where is expected
        </p>
        <p>
          I am looking for a job as a frontend developer. I would be honored to
          work for your company.
        </p>
      </div>
    </div>
  )
}

export default About
