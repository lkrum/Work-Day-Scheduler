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
var hourLoop;

$(function () {

  // event listener for save button. Jessica Saddington, Emma Carr, and Diem Ly helped me come up with this
  $('.saveBtn').click(function () {
      eventList = $(this).siblings('.description').val();
      eventTime = $(this).parent().attr('id');

      localStorage.setItem(eventTime, eventList);
  });


  // colors depicting past(red), present(blue), and future(green) times.
  $('.time-block').each(function () {
    currentTime = dayjs().hour();
    eventTime = parseInt($(this).attr('id').split('-')[1]);

    if (eventTime === currentTime) {
      $(this).addClass('present');
    }
    else if (eventTime < currentTime) {
      $(this).addClass('past');
    }
    else
      $(this).addClass('future');
  });

  console.log(eventTime)
  console.log(currentTime)
  console.log(eventTime < currentTime)

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

  // Jessica Saddington helped me with this for loop
  for (i = 9; i <= 17; i++) {
    $(`#hour - ${i}.eventTime`).val(localStorage.getItem(`hour - ${i}`));
  };

  // current date 
  function showDate() {
    dateToday = dayjs().format('MMM DD, YYYY');
    timeDisplayEl.text(dateToday);
  }

  showDate();

});
