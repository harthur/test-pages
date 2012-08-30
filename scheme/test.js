$(document).ready(function() {
  var markup = $("#markup").text();

  markup = markup.replace(/>/g,'&gt;').
                  replace(/</g,'&lt;').
                  replace(/"/g,'&quot;');

  $("#markup-code").html(markup);

  $(".color-swatch").click(function() {
    console.log(this);
    var picker = new ui.ColorPicker;

    ui.dialog('Select a color', picker)
      .effect('slide')
      .closable()
      .show();

    var swatch = this;

    var className = $(swatch).data("class");
    var color = $("." + className).css("color");

    picker.hue(color);
    picker.render();

    picker.on('change', function(color) {
      $("." + className).css("color", color);

      $(swatch).css("background-color", color);
    });
  })
});
