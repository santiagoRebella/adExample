(function (window, document) {

  var clickUrl = 'http://google.com',
      shakeListener = new Shake({
        threshold: 5, // optional shake strength threshold
        timeout: 1000 // optional, determines the frequency of event generation
      }),
      hasClass = function (elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
      },
      addClass = function (elem, className) {
        if (!hasClass(elem, className)) {
          elem.className += ' ' + className;
        }
      },
      removeClass = function (elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
      },
      Ad = {
        init: function () {

          Ad.container = document.getElementById('container');
          Ad.loaderLayer = document.getElementById('loader');
          Ad.mc = document.getElementsByClassName('m');
          Ad.mf = document.getElementsByClassName('f');
          Ad.instructions = document.getElementById('instructions');

          Ad.loader(function () {

            Ad.listeners();

            setTimeout( function () { Ad.shaked(); }, 4000);
          });
        },
        listeners: function () {
          shakeListener.start();
          window.addEventListener('shake', Ad.shaked, false);

        },
        shaked: function () {
          var i;

          for (i=0;i<Ad.mc.length;i++) {
            addClass(Ad.mc[i], 'fly');
          }

          addClass(Ad.instructions, 'hidden');

          setTimeout(function () {

            addClass(Ad.container, 'second-background');
            removeClass(Ad.container, 'first-background');

          }, 2000);

          setTimeout(function () {

            addClass(Ad.container, 'last-background');
            removeClass(Ad.container, 'second-background');

            for (i=0;i<Ad.mf.length;i++) {
              addClass(Ad.mf[i], 'standby');
              removeClass(Ad.mf[i], 'fly');
            }

            Ad.container.addEventListener('click', function () {
              window.location.href = clickUrl;
            });

            Ad.container.removeChild(Ad.instructions);
            Ad.container.removeChild(Ad.loaderLayer);


          }, 4000);

          window.removeEventListener('shake', Ad.shaked, false);
        },
        loader: function (fn) {

          var imageBuffer = [],
            imgsArray = [
              'first_screen.jpg',
              'transition_screen.jpg',
              'last_screen.jpg',
              'letrero.png',
              'shake-hand.png',
              'm_c.png',
              'm_f.png',
              'm_rb.png',
              'm_v.png',
              'm_c_move.png',
              'm_f_move.png',
              'm_rb_move.png',
              'm_v_move.png'

            ],
            img,
            imagesLoaded = 0;

          imgsArray.forEach(function (item) {

            img = new Image();
            img.src = '/assets/' + item;
            imageBuffer.push(img);
            img.onload = onloadCallback;
          });

          function onloadCallback() {
            imagesLoaded = imagesLoaded + 1;
            if (imagesLoaded === imgsArray.length) {
              removeClass(Ad.container, 'loading');
              fn();
            }
          }

        }
      };

  window.onload = function () {
    Ad.init();
  };

}(window, document));





