(function() {
  var now = new Date();
  var weeks = ['日','月','火','水','木','金','土'];
  var dayOfTheWeek = weeks[now.getDay()];

  if (dayOfTheWeek == weeks[0]) {
    chrome.browserAction.setIcon({path:'icons/gold.png'});
  } if (dayOfTheWeek == weeks[1]) {
    chrome.browserAction.setIcon({path:'icons/purple.png'});
  } if (dayOfTheWeek == weeks[2]) {
    chrome.browserAction.setIcon({path:'icons/red.png'});
  } if (dayOfTheWeek == weeks[3]) {
    chrome.browserAction.setIcon({path:'icons/blue.png'});
  } if (dayOfTheWeek == weeks[4]) {
    chrome.browserAction.setIcon({path:'icons/green.png'});
  } if (dayOfTheWeek == weeks[5]) {
    chrome.browserAction.setIcon({path:'icons/yellow.png'});
  } if (dayOfTheWeek == weeks[6]) {
    chrome.browserAction.setIcon({path:'icons/orange.png'});
  }
})();
