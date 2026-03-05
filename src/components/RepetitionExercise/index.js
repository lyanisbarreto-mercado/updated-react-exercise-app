import React, { useState } from "react";


const Rep = ({ goHome, exercise }) => {

    const [counter, setCounter] = useState(0); //setting up the variable counter, and the state setCounter

    const [sets,setSets] = useState(1); //with each set, it always starts at one
    const [maxSet, setMaxSet] = useState(3);
    const [maxRep, setMaxReps] = useState(4) //The default number of reps per set. It is one number lower than the actual amount (the app will let you go up to 5 in this case)

    function createSets() {
        if (counter > maxRep) { //for the prototype, there is a set number before the counter resets
        setSets(sets + 1);
        setCounter(1);
        }
    }

    const clickUp = () => {
        setCounter(counter + 1); //the state changes when the counter increments - similar process for decrements
        createSets(); 
    }
    const clickDown = () => {
        setCounter(counter => Math.max(counter - 1, 0)) //Math.max sets it so that if the counter is less than 0, it blocks it and resets it to 0
    }
    
    const adjustSet = (i) => {
        const change = prompt("How many sets do you want to do?")
        setMaxSet(change)

    }

    const adjustRep = (i) => {
        const change = prompt("How many reps do you wish to do in each set?")
        setMaxRep(change);
    }

    return (
        <div>
            <div className="top-nav">
                <i className="fa-solid fa-arrow-left" onClick={goHome}></i>
                <i className="fa-solid fa-circle-user"></i>
            </div>
             <img src={exercise?.image} alt={exercise?.name}className="exerciseImage"/>
            <h2>Push Ups</h2>
            <div className="exercise-count">
                <h2 className="counter">{counter}</h2>
                <button onClick={clickUp}><i className="fa-solid fa-arrow-up"></i></button> <button onClick={clickDown}><i className="fa-solid fa-arrow-down"></i></button>
                <button className="adjustments" onClick={adjustRep}>Adjust Reps</button>
                <button className="adjustments" onClick={adjustSet}>Adjust Sets</button>
                
            </div>
            <div className="stats">
                <div className="stats-block">
                    <h3>100</h3>
                    <h4>BPM</h4>
                </div>
                <div className="stats-block">
                    <h3>{sets}/{maxSet}</h3>
                    <h4>sets</h4>
                </div>
                <div className="stats-block">
                    <h3>120</h3>
                    <h4>calories</h4>
                </div>
            </div>
        </div>
    )
}

export default Rep;