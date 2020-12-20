# Fitness Tracker 

  
## Description 
        
Allows user to track their daily workouts and view a dashboard that breaks down their workouts, workout duration, and total weight lifted. 

## Table of Contents

* [Description](#description)
* [Installation](#install)
* [Usage](#usage)
* [License](#license) <img src="http://img.shields.io/badge/license-The Unlicense-blue">
* [Contributors](#contributors)
* [Resources](#resources)
* [Tests](#tests)
* [Questions](#questions)

## Install

Install your Mongo DB and Node.js. install via nmp i: “mongoose –save”, “express”, and “morgan”. 

## Usage

The user will navigate to the main page. If the user has not selected the option “New Workout”, yet, it will be the only option to select. Otherwise, the user will be presented with the buttons “New Workout” and “Continue Workout”. The user will select “New Workout”, which will direct the user to the exercise type dropdown list. The user will select the exercise type, complete all fields and select either “Add Exercise” or “Complete”. If the user selects “Add Exercise” the exercise will be added to the user’s workouts for the day, and the form will be cleared so the user can add another option. At this point, buttons are deactivated until another exercise is input. If the user selects “Complete”, instead, the exercise will be added to the user’s workouts for the day, and the screen will be redirected to the workout summary page. Here the user can select to add more exercises to their workout via “Continue Workout” or begin a new workout via “New Workout”. Anytime “New Workout” is selected, the new exercises are applied to a next day, chronologically. At the summary and main page, the user can also select “Dashboard” to view a breakdown of their exercises, total workout duration, and total pounds lifted. The user can select applicable items in the pie chart legend to zone in on the workout data captured in the “Dashboard”.  <br />

[![Watch the video] (https://youtu.be/sZjaTFu_6uc) ![](./assets/img/FitnessTracker.gif)

## License <img src="http://img.shields.io/badge/license-The Unlicense-blue">

The Unlicense



## Contributors

Suggested addition: labeling the exercise legend labels in the dashboard with date to help differentiate when exercises were done on the dashboard. 

## Resources

Chartjs.org, https://github.com/JordanNaei/fitnessTracker, https://github.com/kqarlos/fitness-tracker, https://github.com/andydurette/Workout-Tracker

## Tests

N/A

## Questions

For more information:

Visit: [https://infiernodeashly.github.io](https://infiernodeashly.github.io)
Email: infiernodeashly@gmail.com
