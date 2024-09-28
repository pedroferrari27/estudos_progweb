import './App.css';
import React, { useEffect, useState } from 'react';

function Timer() {
const [seconds, setSeconds] = useState(0); // Corrected destructuring

useEffect(() => {
const interval = setInterval(() => {
setSeconds((prevSeconds) => prevSeconds + 1);
}, 1000);

return () => clearInterval(interval);

}, []);

return <div> segundos: {seconds}</div>;
}

export default Timer;