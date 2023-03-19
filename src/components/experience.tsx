import React from 'react';
import './styles/experience.scss';

const Experience = () => {
  return (
    <div id='experience' className='experience main-wrapper'>
      <h1 className='heading'>experience</h1>
      <div className='timeline-wrapper'>
        {/* - */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Software developer - Agitavit Solutions d.o.o.</h3>
            <h5>2021 - current / Employment</h5>
            <p>ReactTS, .NET 6, Umbraco, Sql server, jQuery</p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Created first webpage</h3>
            <h5>2021 / Personal</h5>
            <p>Developed with React JS & Bootstrap 4.</p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Created first API</h3>
            <h5>2021 / Personal</h5>
            <p>Developed with .NET core & Vue JS</p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Data visualisation in Microsoft Excel and Google Sheets</h3>
            <h5>2019 - 2020 / Mimovrste d.o.o.</h5>
            <p>
              Created semi-automated Excel documents for sales & stock overview connected with internal ERP system. Developed an automated system of
              price checking using Google App Scripts & Sheets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
