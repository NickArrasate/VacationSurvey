$(document).ready(function() {

  $("form#radios").submit(function( event ) {

    var name = $("#namer").val();
    var climate = $("input:radio[name=climateRadio]:checked").val();
    var tree = $("input:radio[name=treeRadio]:checked").val();
    var passport = $("input:radio[name=passRadio]:checked").val();
    var city = $("input:radio[name=cityRadio]:checked").val();
    var kids = $("input:radio[name=kidsRadio]:checked").val();

    $(document).trigger("clear-alert-id.example");
    if (name.length <= 1) {
      $(document).trigger("set-alert-id-example", [
        {
          message: "Please enter a name",
          priority: "error"
        }])
        console.log("here");
      }

    if (climate === "hot" && tree === "palm" && passport === "no"       && city === "city") {
      $(".showme").removeClass("showme");
      $(".hawaii").addClass("showme");

    } else if (climate === "hot" && tree === "palm" && passport   === "yes" && city === "country") {
      $(".showme").removeClass("showme");
      $(".fiji").addClass("showme");

    } else if (climate === "cold" && tree === "pine" && passport === "no" && city === "country") {
      $(".showme").removeClass("showme");
      $(".alaska").addClass("showme");

    } else if (climate === "cold" && passport === "yes" && city === "country" && kids === "no") {
      $(".showme").removeClass("showme");
      $(".iceland").addClass("showme");

    } else if (climate === "temperate" && passport === "yes" && city === "city") {
      $(".showme").removeClass("showme");
      $(".rome").addClass("showme");

    } else if (climate === "temperate" && passport === "no" && city === "city") {
      $(".showme").removeClass("showme");
      $(".newyork").addClass("showme");

    } else {
      $(".showme").removeClass("showme");
      $(".error").addClass("showme");
    }


      $(".name").text(name);
      event.preventDefault();

    });
});
