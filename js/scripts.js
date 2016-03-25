$(document).ready(function() {

  $("form#radios").submit(function( event ) {

    var name = document.getElementsByName("name")[0].value;
    var climate = $("input:radio[name=climateRadio]:checked").val();
    var tree = $("input:radio[name=treeRadio]:checked").val();
    var passport = $("input:radio[name=passRadio]:checked").val();
    var city = $("input:radio[name=cityRadio]:checked").val();
    var kids = $("input:radio[name=kidsRadio]:checked").val();

    $("#alert").empty();

    if (name === null || name === ""){
      $("#alert").text("Please enter a name and resubmit.");

    } else if(climate === "hot" && tree === "palm" && passport === "no"       && city === "city") {
      $(".default").addClass("hidedefault");
      $(".showme").removeClass("showme");
      $(".hawaii").addClass("showme");

    } else if (climate === "hot" && tree === "palm" && passport   === "yes" && city === "country") {
      $(".default").addClass("hidedefault");
      $(".showme").removeClass("showme");
      $(".fiji").addClass("showme");

    } else if (climate === "cold" && tree === "pine" && passport === "no" && city === "country") {
      $(".default").addClass("hidedefault");
      $(".showme").removeClass("showme");
      $(".alaska").addClass("showme");

    } else if (climate === "cold" && passport === "yes" && city === "country" && kids === "no") {
      $(".default").addClass("hidedefault");
      $(".showme").removeClass("showme");
      $(".iceland").addClass("showme");

    } else if (climate === "temperate" && passport === "yes" && city === "city") {
      $(".default").addClass("hidedefault");
      $(".showme").removeClass("showme");
      $(".rome").addClass("showme");

    } else if (climate === "temperate" && passport === "no" && city === "city") {
      $(".default").addClass("hidedefault");
      $(".showme").removeClass("showme");
      $(".newyork").addClass("showme");

    } else {
      $(".default").addClass("hidedefault");
      $(".showme").removeClass("showme");
      $(".error").addClass("showme");
    }

    $(".name").text(name);

    event.preventDefault();

    });
});
