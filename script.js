$(document).ready(function() {
  var timeouts = [];
  function runSequence(sequenceName) {
    $('title').html(sequenceName + ' | Asana');
    sequenceName = sequenceName.toLowerCase().replace(/ /g, '-');

    $.getJSON('./sequences/' + sequenceName.toLowerCase() + '.json', function(poses) {
      var delay = 0;
      poses.forEach(function(pose) {
        var timeoutId = window.setTimeout(function() {
          $('#pose').attr('src', './yoga-poses/' + pose.src);
          $('#alert-next')[0].play();
        }, delay);
        timeouts.push(timeoutId);
        delay = delay + pose.duration * 1000 * 60;
      });;
      var timeoutId = window.setTimeout(function() {
        $('#pose').removeAttr('src');
        $('#alert-end')[0].play();
        timeouts = [];
      }, delay);
      timeouts.push(timeoutId);
    });
  };

  $('#sequences li').each(function() {
    var sequenceName = $(this).html();
    $(this).click(function() {
      timeouts.forEach(function(timeoutId) {
        window.clearTimeout(timeoutId);
      });
      runSequence(sequenceName);
    });
  });
});
