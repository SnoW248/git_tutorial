(function() {
  'use stict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false;

  start.addEventListener('click', function() {
    if (isStarted) {
      return;
    }
    isStarted = true;
    this.className = 'pushed';
    startTime = Date.now();
    stop.className = '';
    result.textContent = '0.000';
    result.className = 'standby';
  });

  stop.addEventListener('click', function() {
    var elapsedTime;
    var diff;

    if (!isStarted) {
      return;
    }
    isStarted = false;
    elapsedTime = (Date.now() - startTime) / 1000;
    this.className = 'pushed';
    result.textContent = elapsedTime.toFixed(3);
    start.className = '';
    result.className = ''

    diff = elapsedTime - 5.0;
    if (Math.abs(diff) < 1.0) {
      //result.style.background = "red";
      result.className = 'perfect';
    }
  });

})();
