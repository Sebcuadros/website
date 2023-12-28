import React, { useState } from 'react';
import confetti from 'canvas-confetti';

type CardType = 'jobseeking' | 'recruiting' | 'miscellaneous';

const Hero: React.FC = () => {
  // State to manage the visibility of each card group
  const [visibility, setVisibility] = useState({
    jobseeking: true,
    recruiting: false,
    miscellaneous: false,
  });

  // Function to set only the selected card type to be visible
  const showOnlySelected = (selectedCardType: CardType) => {
    setVisibility({
        jobseeking: false,
        recruiting: false,
        miscellaneous: false,
        [selectedCardType]: true,
      });
    };

  // Function to fire confetti
  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 140,
      origin: { y: 0.6 }
    });
  };

    return (
      <div className="relative z-10 h-screen w-screen ml-24">
        <div className="h-1/4 flex">
            <h1 className="rounded-md font-bold text-6xl mt-24">Whoa I'm on the&nbsp;</h1>
              <h1 className="rounded-md font-bold text-6xl mt-24 bg-white hover:bg-gradient-to-r bg-clip-text text-transparent from-purple-400 via-blue-400 to-purple-500 animate-text cursor-pointer"
              onClick={fireConfetti}
              >internet!</h1>
        </div>
        <div className="flex h-9 gap-2 mt-24">
        {/* Buttons to control visibility */}
          <button className= {`h-full px-3 ${visibility.jobseeking ? 'glass-card' : ''}`} onClick={() => showOnlySelected('jobseeking')}>Job Seeking</button>
          <button className= {`h-full px-3 ${visibility.recruiting ? 'glass-card' : ''}`} onClick={() => showOnlySelected('recruiting')}>Recruiting</button>
          <button className= {`h-full px-3 ${visibility.miscellaneous ? 'glass-card' : ''}`} onClick={() => showOnlySelected('miscellaneous')}>Miscellaneous</button> 
        </div> 
        {/* Job seeking cards */}
        {visibility.jobseeking && (
          <div className="jobseeking flex gap-4 h-1/2 mt-4">
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">Resume's </span>
            </div>
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">Getting better at stuff </span>
            </div>
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">My thoughts on landing where you want</span>
            </div>
          </div>
        )}

        {/* Recruiting cards */}
        {visibility.recruiting && (
          <div className="recruiting flex gap-4 h-1/2 mt-4">
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">Recruiting Framework</span>
            </div>
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">Sourcing Framework</span>
            </div>
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">My thoughts on what works</span>
            </div>
          </div>
        )}

        {/* Miscellaneous cards */}
        {visibility.miscellaneous && (
          <div className="miscellaneous flex gap-4 h-1/2 mt-4">
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">Pending</span>
            </div>
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">Pending</span>
            </div>
            <div className="glass-card w-1/4 h-full flex flex-col justify-end items-center">
              <span className="text-center mb-4">Pending</span>
            </div>
          </div>
        )}
      </div>
    )
};

export default Hero;