'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Get current position coordinates using GeolocationAPI
if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition((position) => { // First callback is result, the second is error
        const {latitude, longitude} = position.coords;
        console.log(latitude, longitude);
    }, () => {
        alert(`Couldn't get position`);
    });