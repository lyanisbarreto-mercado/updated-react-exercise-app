import React, { useState, useEffect, useRef } from "react";
//Used a tutorial from The Medium to guide me in making this stopwatch. https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e

const RunningLaps = ({ goHome, exercise }) => {
    const [time, setTime] = useState(0); //setting up the variable counter, and the state setCounter
    const [running, setRunning] = useState(false); //finds if the timer is running or not
    const [active, setActive] = useState("Start");

    const [lap, setLap] = useState(1);
    const [lapTime, setLapTime] = useState(0)
    const [lastLapTime, setLastLapTIme] = useState(0);

    
    const intervalRef = useRef(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime +1);
            }, 10)
        } else {
            clearInterval(intervalRef.current)
        }
    }, [running]);


    const timeRunning = (t) => {

        let minutes = Math.floor((t % 36000) / 6000)
        let seconds = Math.floor((t % 6000) / 100);
        let milliseconds = t % 100;

        return (
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`
        )
    }
     
    
    function timeKeeper() {
        if (running) {
        setRunning(false);
        setActive("Start"); 
    } else {
        setRunning(true);
        setActive("Stop")
    }
    }
    const reset = () => {
        setTime(0);
        setRunning(false)
        setActive("Start")
        setLap(1);
        setLapTime(0);
    }

    const countLap = () => { //it has to record how much time each lap took, while maintaining the base time
        if (running) {
            const currentLapTime = time - lastLapTime;
            setLapTime(currentLapTime);
            setLastLapTIme(time);
            setLap(prev => prev + 1);
        } 

    }
    
    

    return (
        <div>
            <div className="top-nav">
                <i className="fa-solid fa-arrow-left" onClick={goHome}></i>
                <i className="fa-solid fa-circle-user"></i>
            </div>
            <img src={exercise?.image} alt={exercise?.name}className="exerciseImage"/>
            <h2>{exercise?.name}</h2>
            <div className="exercise-count">
                <h2 className="timer">{timeRunning(time)}</h2>
                
                <button className="adjustments" onClick={countLap}>Record Lap</button>
                <div className="time-state">
                <button className="adjustments" onClick={timeKeeper}>{active}</button>
                <button className="adjustmentst" onClick={reset}>Reset</button>
                </div>
            </div>
            <div className="stats">
                <div className="stats-block">
                    <h3>100</h3>
                    <h4>BPM</h4>
                </div>
                <div className="stats-block">
                    <h3>{lap}</h3>
                    <h4>lap</h4>
                    <p>{timeRunning(lapTime)}</p>
                </div>
                <div className="stats-block">
                    <h3>120</h3>
                    <h4>calories</h4>
                </div>
            </div>
        </div>
    )
}

export default RunningLaps;