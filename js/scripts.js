$(document).ready(function() {
  $(".animalOptions").submit(function(event) {
    event.preventDefault();
    const selection = $("#animals").val();
    if (selection === "whale") {
      $(".octopus").hide();
      $(".parrot").hide();
      $(".whale").show();
    } else if (selection === "octopus") {
      $(".octopus").show();
      $(".whale").hide()
      $(".parrot").hide();
    } else {
      $(".parrot").show();
      $(".whale").hide()
      $(".octopus").hide()
    }
  });
});


/*
if (whale) {
  $("#hwale").show()
} else if <octopus> {
  $("#octopus").show()
} else {
  $("#parrot").show()
}

$("#clickWhale").click(function () {

})

if ($("#clickWhale").click() {
  $("#whale").show()
} else if ($("#clickOctopus").click() {
  $("#octopus").show()
} else {
  $("#parrot").show()
}
*/