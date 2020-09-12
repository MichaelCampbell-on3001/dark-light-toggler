'use strict';

// Dom Elements
 const darkButton = document.getElementById('dark');
 const LightButton = document.getElementById('light');
 const solarButton = document.getElementById('solar');
 const body = document.body;

 // Apply the cached theme on reload

 const theme = localStorage.getItem('theme');
 const isSolar = localStorage.getItem('isSolar');

 if (theme) {
   body.classList.add(theme);
   isSolar && body.classList.add('solar');
 }

 // Button Event Handlers

 