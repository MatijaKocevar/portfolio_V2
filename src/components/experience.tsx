import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Data visualisation in Microsoft Excel and Google Sheets</h3>
            <h5>2019 - 2020 / Mimovrste d.o.o.</h5>
            <p>
              Created semi-automated Excel documents for sales & stock overview connected with
              internal ERP system. Developed an automated system of price checking using Google App
              Scripts & Sheets.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Created first webpage</h3>
            <h5>2021 / Personal</h5>
            <p>Developed with React JS & Bootstrap 4.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Created first API</h3>
            <h5>2021 / Personal</h5>
            <p>Developed with .NET core & Vue JS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
