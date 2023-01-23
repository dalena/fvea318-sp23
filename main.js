$(document).ready(function () {

  $.get('date.json', function (data) {
    $('#updated_date').html(data.date);
  });

  $('#links .button').click(function () {
    var selected = '#' + $(this).data('id');
    openSection(selected);
  });
  $('#schedule h3').click(function () {
    var selected = $(this).attr('id');
    openSection('#schedule', selected);
  });
  $('#meditations h3').click(function () {
    var selected = $(this).attr('id');
    openSection('#meditations', selected);
  });
  $('#assignments h3').click(function () {
    var selected = $(this).attr('id');
    openSection('#assignments', selected);
  });
  $('#finals h3').click(function () {
    var selected = $(this).attr('id');
    openSection('#finals', selected);
  });

});

function openSection(id, heading) {
  if (open && open === heading) closeSection(heading);
  else {
    $('.block').hide();
    if (heading) $('.toggle').hide();
    $(id).show();

    if (heading) {
      $('#' + heading + '-content').show();
      if ($(id + ' div.toggle:visible')[0]) {
        open = $(id + ' div.toggle:visible')[0].id.substring(0, 2);
      }
    }
    // window.location.hash = id.substring(1);
    // if (!heading) {
    //   $(window).scrollTop();
    // }
  }
}

function closeSection(heading) {
  $('.toggle').hide();
  open = null;
}
