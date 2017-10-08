// deal with animations and CSS for scroll position
const doc = $(document);

var didScroll = false;
var height = doc.height();

// detect if scrolled or not
doc.bind('mousewheel', (e) => {
  let deltaY = e.originalEvent.wheelDeltaY;
  // history-navbar show and unshow
  if (deltaY > 100) {
    // scroll up, make navbar bigger
    console.log('scroll up');
  } else if (deltaY < -100) {
    // scroll down, make navbar smaller
    console.log('scroll down');
  }

  // notify the scroll position 
  didScroll = true;
});

// listens for the position of the scroll to determine what styles to apply
setInterval(() => {
  if (didScroll) {
    didScroll = false; // user needs to scroll again to trigger more animations
    var scroll = doc.scrollTop();

    if (scroll <= height) {
      // phase 1
      console.log(1);
    } else if (scroll <= 2 * height) {
      // phase 2
      console.log(2);
    } else {
      // phase 3
      console.log(3);
    }
  }
}, 50);