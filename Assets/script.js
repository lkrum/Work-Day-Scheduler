// read from localStorage
// Populate page with data if exists in localStorage

// click event with event delegation to target the text area associated with the save button
// save button has to read value of time associated with it
// use the sibling DOM method to traverse the DOM, event.target parent/sibling (will get you actual save button)
// capture the value of the text area, save string to local storage
// make sure function is reusable

// Use Dayjs to get current time use military time 
//  read the value of the time block from the html
//  need if statement that compares the values and adds a class to change the color
// loop through html element and read a data-attribute time

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// variable expressions
var timeDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');
var timeblockEl = $('.time-block');

// variables
var dateToday;
var saveSchedule;
var currentTime;
var eventTime;
var eventList;
var userInput;
let calHour = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

$(function () {

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage
  // localStorage.setItem(time, value);
  $(saveBtn).on('click', saveSchedule()) 
  function saveSchedule(eventList, eventTime) {
    for(let i = 0; i < calHour.length; i++) {
    eventList = $(this).siblings('.description').val();
    eventTime = $(this).parent().attr('id', calHour[i]);
      
    localStorage.setItem(eventList, eventTime);
    
  }
}

saveSchedule();

function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem(eventList, eventTime);
 
}
  

// colors depicting past (red), present (blue), and future (green) times.

currentTime = dayjs().hour();
function colorBlock() {
  if (eventTime < currentTime) {
    $(timeblockEl).removeClass(['present', 'past']).addClass('future');
  }
  if (eventTime > currentTime) {
    $(timeblockEl).removeClass(['future', 'present']).addClass('past');
  } else {
    $(timeblockEl).removeClass(['future', 'past']).addClass('present');
  }
}


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  userInput = parseInt($(this).attr('e'));
  var projects = readProjectsFromStorage();



// current date 
function showDate() {
  dateToday = dayjs().format('MMM DD, YYYY');
  timeDisplayEl.text(dateToday);
}
showDate();
saveSchedule();
colorBlock()

});
