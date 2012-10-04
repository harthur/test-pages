$(document).ready(function() {
  var markup = $("#markup").text();

  markup = markup.replace(/>/g,'&gt;').
                  replace(/</g,'&lt;').
                  replace(/"/g,'&quot;');

  $("#markup-code").html(markup);

  $(".color-swatch").each(function() {
    var swatch = this;
    var parent = $(swatch).parent();
    var className = parent.data("class");
    var color = $("." + className).css("color");

    $(this).spectrum({
      preferredFormat: "rgb",
      showInput: true,
      localStorageKey: className,
      change: function(color) {
        var rgb = color.toRgbString();
        setColor(className, rgb);

        var value = parent.children(".color-value");
        value.val(rgb);
      }
    });

    var color = $(this).spectrum("get");
    setColor(className, color);
  });

  $(".color-value").change(function() {
    var val = $(this).val();
    var parent = $(this).parent();
    var className = parent.data("class");
    var color = $("." + className).css("color");

    var picker = parent.children(".color-swatch");

    setColor(className, val);

    picker.spectrum("set", val);
  });
});

function setColor(className, color) {
  console.log(className, color);
  var styleSheet = document.styleSheets[3];

  var selector = "." + className;
  var rules = styleSheet.cssRules;

  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    if (rule.selectorText == selector) {
      styleSheet.deleteRule(i);
    }
  }

  styleSheet.insertRule(selector + "{ color: " + color + " !important; }", 0);
}