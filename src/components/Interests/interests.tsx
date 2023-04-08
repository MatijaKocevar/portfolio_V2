import React from 'react'
import InterestsCarousel from './interestsCarousel'

const Interests = () => {
  return (
    <div id="interests" className="interests">
      <h1>interests</h1>
      <div className="container">
        <div className="interests-content">
          <InterestsCarousel />
        </div>
      </div>
    </div>
  )
}

export default Interests
