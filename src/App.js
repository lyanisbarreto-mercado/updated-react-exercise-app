import './App.css';
import React, { useState } from "react";
import Rep from "./components/RepetitionExercise"
import StopwatchCounter from "./components/DurationExercise"

function App() {
  const [screen, setScreen] = useState("home")
  const [selectedExercise, setSelectedExercise] = useState(null);

  
  return (
    <div className="App phone">
      {screen === "home" ? (
        <div>
        <div className="top-nav">
            <h4>Home</h4>
            <h4>Workouts</h4>
            <h4>Stats</h4>
          <div className="nav-menu">
            
          </div>
          <i className="fa-solid fa-circle-user"></i>
        </div>
        <h1>Ready to Work out?</h1>
        <div className="dailyStats">
          <div className="stats-block">
              <h3>2</h3>
              <h4>days this week</h4>
          </div>
          <div className="stats-block">
              <h3>3</h3>
              <h4>weeks in a row</h4>
          </div>
          <div className="stats-block">
              <h3>23</h3>
              <h4>minutes today</h4>
          </div>
          <div className="stats-block">
              <h3>2</h3>
              <h4>hours this week</h4>
          </div>
        </div>
        <div className="exercise">
        <div className="options" onClick={() => {
          setSelectedExercise({
            name: "Push Ups",
            image: "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg"
          });
         setScreen("reps")}}>
          <h4>Push Ups</h4>
          <img src="https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg" alt="A man doing push ups" />
        </div>
        <div className="options" onClick={() => {
          setSelectedExercise({
            name: "Running",
            image: "https://images.pexels.com/photos/8567597/pexels-photo-8567597.jpeg"
          });
         setScreen("stopwatch")}}>
          <h4>Running</h4>
          <img src="https://images.pexels.com/photos/8567597/pexels-photo-8567597.jpeg" alt="A woman running" />
        </div>
        <div className="options" onClick={() => {
          setSelectedExercise({
            name: "Plank",
            image: "https://images.pexels.com/photos/9376270/pexels-photo-9376270.jpeg"
          });
         setScreen("stopwatch")}}>
            <h4>Plank</h4>
            <img src="https://images.pexels.com/photos/9376270/pexels-photo-9376270.jpeg" alt="A woman in a plank position" />
        </div>
        <div className="options" onClick={() => {
          setSelectedExercise({
            name: "Weights",
            image: "https://images.pexels.com/photos/812746/pexels-photo-812746.jpeg"
          });
         setScreen("reps")}}>
            <h4>Weights</h4>
            <img src="https://images.pexels.com/photos/812746/pexels-photo-812746.jpeg" alt="A man lifting weights" />
        </div>
        </div>
      </div>
      ) : screen === "stopwatch" ? (
      <StopwatchCounter goHome={() => setScreen("home")} exercise={selectedExercise}/>
      ) : screen === "reps" ? (
        <Rep goHome={() => setScreen("home")} exercise={selectedExercise}/>
      ) : null
    }
    </div>
    
  );
}

export default App;
