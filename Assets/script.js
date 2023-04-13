// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// variable expressions
var timeDisplayEl = $('#currentDay');

// variables
var dateToday;
var saveSchedule;
var eventList;
var currentTime;
let calHour = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

$(function () {
  
  
  // TODO: Add a listener for click events on the save button. This code should

  // user inputs event
  // event and time need to be saved in local storage when save button is clicked


  $('.saveBtn').click(function() {
    saveSchedule();
  });


  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  currentTime = dayjs().hour();
  function timeCode() {
  if (calHour[i] < currentTime) {
    $('.time-block').removeClass(['present', 'past']).addClass('future');
  }
  if (calHour[i] > currentTime) {
    $('.time-block').removeClass(['future', 'present']).addClass('past');
  } else {
    $('.time-block').removeClass(['future', 'past']).addClass('present');
  }
}

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  
  saveSchedule = function () {
    for (let i = 0; i < calHour.length; i++) {
      eventList = $(".description");
      window.localStorage.setItem('event-schedule', eventList[i]);
      window.localStorage.setItem('time', calHour[i]);
      localStorage.getItem('time');
    
    }
  }

  

  // current date 
  function showDate() {
  var dateToday = dayjs().format('MMM DD, YYYY');
  timeDisplayEl.text(dateToday);
 }
  showDate();
  saveSchedule();
  timeCode(); 

});
