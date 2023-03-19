import './styles/education.scss';

const Education = () => {
  return (
    <div id='timeline' className='education main-wrapper'>
      <h1 className='heading'>education</h1>
      <div className='timeline-wrapper'>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Electrotechnician of computer science</h3>
            <h5>2004 - 2008 / High school (.V)</h5>
            <p>Gained basic programming skills in C++, HTML, CSS. </p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Computer science and information technologies</h3>
            <h5>2008 - 2011 / College (.VI) - unfinished</h5>
            <p>Gained knowledge of Linux Shell, and furthered skills in C++, HTML and CSS.</p>
          </div>
        </div>
        {/* - */}
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Learning front-end & back-end development</h3>
            <h5>2020 - 2021 / Personal</h5>
            <p>HTML, CSS, SQL, React JS, Vue JS, Node JS, .NET core, C#</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
