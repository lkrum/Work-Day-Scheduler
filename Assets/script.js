// variable expressions
var timeDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');

// variables
var dateToday;
var currentTime = dayjs().hour();;
var eventTime;
var eventList;

// event listener for save button. Jessica Saddington, Emma Carr, and Diem Ly helped me come up with this
$('.saveBtn').click(function () {
  eventList = $(this).siblings('.description').val();
  eventTime = $(this).parent().attr('id');

  localStorage.setItem(eventTime, eventList);
});

// function to compare time elements to change the color and take items from storage. Jessica Saddington and Emma Carr helped me with the split method.
$('.time-block').each(function () {
  var hourEL = $(this).attr('id');
  eventTime = parseInt(hourEL.split('-')[1]);
  // Patrick Lake helped me come up with the getItem and .val methods here to display items from local storage onto the text input box
  var hourStorage = localStorage.getItem(hourEL);
  $(this).children('.description').val(hourStorage);
  // if statements comparing current time to event time 
  if (eventTime === currentTime) {
    $(this).addClass('present');
  }
  else if (eventTime < currentTime) {
    $(this).addClass('past');
  }
  else
    $(this).addClass('future');
});

// function to show the current date and time
function showDate() {
  dateToday = dayjs().format('dddd MMM DD, YYYY hh:mm:ss');
  timeDisplayEl.text(dateToday);
}

showDate();
setInterval(showDate, 1000);


