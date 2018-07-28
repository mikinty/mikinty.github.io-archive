// import styling
import './../css/main.scss';
import './listeners';
import './scroll';

// import uikit requirements
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// import blazy for lazy loading images and videos
import Blazy from 'blazy';

let blazy = new Blazy({
  // we need this to load the images that are not shown in the slideshow
  loadInvisible: true,
  /* Debugging purposes only
  success: (ele) => {
    console.log('Success', ele);
  },
  error: (ele, msg) => {
    console.log(ele, msg);
  }
  */
});