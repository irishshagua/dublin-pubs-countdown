// Javascript
$(function() {
  var currentDate = new Date();
  $('.time').countdown("2021/06/07/10:00:00", function(event)
//	Delete line 6
//  $('.time').countdown(25 * 24 * 60 * 60 * 1000 + currentDate.valueOf(), function(event)
//	until here
	{
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.'+event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});
