import React, { useState } from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share'
import { Link } from 'react-scroll'

const Footer = () => {
  let startingOffset = window.innerWidth < 1199 ? -61 : -86
  const [offset, setOffset] = useState(startingOffset)

  window.addEventListener('resize', () => {
    setOffset(window.innerWidth < 1199 ? -61 : -86)
  })

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="fpos">
              <a href="tel:+38670892271">070 892 271</a>
              <br />
              <a href="mailto: matija.kocev@gmail.com">matija.kocev@gmail.com</a>
              <p>Ljubljana, Slovenia</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="row">
              <div className="col">
                <Link
                  smooth={true}
                  to="about-me"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  About Me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="education"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  Education
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="experience"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  Experience
                </Link>
              </div>
              <div className="col">
                <Link smooth={true} to="skills" offset={offset} ignoreCancelEvents={true} href="#">
                  Skills
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="projects"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  Projects
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="interests"
                  offset={offset}
                  ignoreCancelEvents={true}
                  href="#"
                >
                  Interests
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="fpos2">
              <div className="d-flex justify-content-center pt-3">
                <FacebookShareButton
                  url={'https://matijakocevar.github.io/myPortfolio/'}
                  quote={"Matija Kočevar's portfolio"}
                >
                  <FacebookIcon className="mx-3" size={36} />
                </FacebookShareButton>
                <TwitterShareButton url={'https://matijakocevar.github.io/myPortfolio/'}>
                  <TwitterIcon className="mx-3" size={36} />
                </TwitterShareButton>
                <RedditShareButton url={'https://matijakocevar.github.io/myPortfolio/'}>
                  <RedditIcon className="mx-3" size={36} />
                </RedditShareButton>
                <LinkedinShareButton url={'https://matijakocevar.github.io/myPortfolio/'}>
                  <LinkedinIcon className="mx-3" size={36} />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
