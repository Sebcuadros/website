import React, { useState, useEffect } from 'react';

const Clock = () => {
  // Function to get the current time in ET
  const getCurrentTimeInET = () => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'America/New_York', // Eastern Time Zone
      hour12: true,
    }).format(new Date());
  };

    // Function to determine the string to display
    const getTimeBasedString = () => {
        const currentTime = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'America/New_York',
            hour12: false,
          }).format(new Date());
        
          // Split the current time string by ":" to get an array [hour, minute, second]
          const splitTime = currentTime.split(':'); 
          const hourOfDay = parseInt(splitTime[0], 10);   // Convert the hour string to an integer
          const dayOfWeek = new Date().getDay(); // This retains the local day of the week
    
        if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday - Friday
          if (hourOfDay >= 6 && hourOfDay < 8) { // Between 6 and 8
            return 'running or boxing!';
          } else if (hourOfDay >= 8 && hourOfDay < 19) { // Between 8 and 7
            return 'recruiting @ Whop -> check out Careers.whop.com';
          } else if (hourOfDay >= 19 && hourOfDay < 21) { // Between 7 and 9
            return 'at Jiu Jitsu or Muay Thai @ Kings Combat in Williamsburg!';
          } else if (hourOfDay >= 21 && hourOfDay < 23) { // Between 9 and 11
            return 'reading, practicing guitar or building!';
          } else { // Evening
            return 'sleeping 😴';
          }
        } 
        else if (dayOfWeek === 6) { // Saturday
          if (hourOfDay >= 8 && hourOfDay < 10) { // Between 6 and 10
            return 'drinking my morning coffee!';
          } else if (hourOfDay >= 10 && hourOfDay < 15) { // Between 10 and 3
            return 'at Jiu Jitsu or Muay Thai @ Kings Combat in Williamsburg!';
          } else if (hourOfDay >= 15 && hourOfDay < 17) { // Between 3 and 5
            return 'writing something';
          } else if (hourOfDay >= 18 && hourOfDay < 24) { // Between 6 and 12
            return 'somewhere around town!';
          } else { // Evening  
            return 'sleeping 😴';
          }
        }
        else { // Sunday
          if (hourOfDay >= 8 && hourOfDay < 10) { // Between 8 and 10
            return 'drinking my morning coffee!';
          } else if (hourOfDay >= 10 && hourOfDay < 17) { // Between 10 and 5
            return 'building something or reading!';
          } else if (hourOfDay >= 17 && hourOfDay < 22) { // Between 5 and 10
            return 'somewhere around town!';
          } else { // Evening
            return 'sleeping 😴';
          }
        }
      };

  // State to store the current ET time
  const [currentTime, setCurrentTime] = useState(getCurrentTimeInET());

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTimeInET());
    }, 1000);

    // Clear interval on unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipImageSrc = '/Schedule.png';

  return (
    <div className="grid">
      <h1 className="place-self-end text-xs">I'm in Brooklyn, it's currently {currentTime}</h1>
      <h1 className="place-self-end text-xs">Atm you can probably catch me {getTimeBasedString()}{' '}
      <span
        onMouseOver={() => setIsTooltipVisible(true)}
        onMouseOut={() => setIsTooltipVisible(false)}
        className="bg-white text-xs hover:bg-gradient-to-r bg-clip-text text-transparent from-purple-400 via-blue-400 to-purple-500 animate-text"
      >
       ⓘ
      </span>
        <div
        className={`absolute h-screen rounded shadow-lg text-xs transition-opacity duration-1000 ease-in-out ${
          isTooltipVisible ? 'opacity-100' : 'opacity-0'
        }`}
        >
          <img src={tooltipImageSrc} alt="Tooltip" />
        </div>
      </h1>
    </div>
  );
};

export default Clock;
