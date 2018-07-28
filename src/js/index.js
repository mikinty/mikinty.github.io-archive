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
  // src: 'src',
  loadInvisible: true,
  success: (ele, msg) => {
    console.log(ele, msg);
  },
  error: (ele, msg) => {
    console.log(ele, msg);
  }
});