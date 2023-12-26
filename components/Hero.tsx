import React, { useState, useRef} from 'react';

type CardType = 'jobseeking' | 'recruiting' | 'miscellaneous';

const Hero: React.FC = () => {
  // State to manage the visibility of each card group
  const [visibility, setVisibility] = useState({
    jobseeking: true,
    recruiting: false,
    miscellaneous: false,
  });


  const [sliderStyle, setSliderStyle] = useState({});
  const jobSeekingButtonRef = useRef(null);
  const recruitingButtonRef = useRef(null);
  const miscellaneousButtonRef = useRef(null);

  // Function to set only the selected card type to be visible
  const showOnlySelected = (selectedCardType: CardType) => {
    let buttonRef;
    switch (selectedCardType) {
      case 'jobseeking':
        buttonRef = jobSeekingButtonRef.current;
        break;
      case 'recruiting':
        buttonRef = recruitingButtonRef.current;
        break;
      case 'miscellaneous':
        buttonRef = miscellaneousButtonRef.current;
        break;
      default:
        buttonRef = null;
    }
  
    if (buttonRef) {
      const { offsetLeft, clientWidth } = buttonRef;
      setSliderStyle({ left: offsetLeft, width: clientWidth });
    }

    setVisibility({
        jobseeking: false,
        recruiting: false,
        miscellaneous: false,
        [selectedCardType]: true,
      });
    };

    return (
      <div className="relative z-10 w-screen ml-24">
        <div className="h-1/4">
            <h1 className="rounded-md w-56 font-bold text-3xl mt-24">Whoa I'm on the internet</h1>
        </div>
      <div className="flex h-10 gap-2 mt-24 content-center">    
      
      {/* Buttons to control visibility */}
        <button className= {`h-full px-3 py-2 ${visibility.jobseeking ? 'glass-card' : ''}`} onClick={() => showOnlySelected('jobseeking')}>Job Seeking</button>
        <button className= {`h-full px-3 py-2 ${visibility.recruiting ? 'glass-card' : ''}`} onClick={() => showOnlySelected('recruiting')}>Recruiting</button>
        <button className= {`h-full px-3 py-2 ${visibility.miscellaneous ? 'glass-card' : ''}`} onClick={() => showOnlySelected('miscellaneous')}>Miscellaneous</button> 
        <div
      className="slider"
      style={{
        position: 'absolute',
        bottom: '-1px', // Adjust as needed
        height: '4px', // Your desired thickness
        background: '#FFF', // Change to match your design
        transition: 'left 0.3s ease-out, width 0.3s ease-out', // Smooth animation
        ...sliderStyle,
      }}
    ></div>
      </div> 

      {/* Job seeking cards */}
      {visibility.jobseeking && (
        <div className="jobseeking flex gap-4 h-1/2 mt-12">
          <div className="glass-card w-1/4 h-96">Resume Template</div>
          <div className="glass-card w-1/4 h-96">Resume Reviewer</div>
          <div className="glass-card w-1/4 h-96">My thoughts on landing where you want</div>
        </div>
      )}

      {/* Recruiting cards */}
      {visibility.recruiting && (
        <div className="recruiting flex gap-4 h-1/2 mt-12">
          <div className="glass-card w-1/4 h-96">Recruiting Framework</div>
          <div className="glass-card w-1/4 h-96">Sourcing Framework</div>
          <div className="glass-card w-1/4 h-96">My thoughts on what works</div>
        </div>
      )}

      {/* Miscellaneous cards */}
      {visibility.miscellaneous && (
        <div className="miscellaneous flex gap-4 h-1/2 mt-12">
          <div className="glass-card w-1/4 h-96">MMA & Weightlifting</div>
          <div className="glass-card w-1/4 h-96">Fun: Movies, Music, and Games</div>
          <div className="glass-card w-1/4 h-96">Approach to life</div>
        </div>
      )}
        </div>
    )
};

export default Hero;