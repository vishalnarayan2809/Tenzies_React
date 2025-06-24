import React, { use } from 'react';
import { useStopwatch } from 'react-timer-hook';
import '../index.css'
import { useEffect } from 'react';

export default function MyStopwatch(props) {
  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true, interval: 20 });

    useEffect(()=>{
      if(props.gameWon){
        pause()
      }else{
        handleReset()
      }
    },[props.gameWon])

    const handleReset = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds()); // Reset to current time
    reset(time, true); // Pass date object and autoStart as false
  };

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '20px'}}>
    <span style={{fontWeight: "bolder"}} >Time: </span><span>{minutes}</span>:<span>{seconds}</span>:<span>{milliseconds}</span>
      </div>
    </div>
  );
}
