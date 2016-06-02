//Frontend
$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (noTriangle(side1,side2,side3)){
      $("#triangle").text(" Not a triangle");
    }else if (scalene(side1,side2,side3)) {
      $("#triangle").text(" scalene");
    }else if (isoceles(side1,side2,side3)) {
      $("#triangle").text(" isoceles");
    }else {
      $("#triangle").text(" equilateral");
    }
    $("#result").show();
  });
});

//Backend
var equilateral = function (side1,side2,side3){
  return (side1===side2 && side2===side3 && side1===side3);
}
var isoceles = function (side1,side2,side3){
  return  ((side1===side2 && side2!==side3)
        || (side2===side3 && side1!==side2)
        || (side1===side3 && side2!==side3));
}
var scalene = function (side1,side2,side3){
  return (side1!==side2 && side2!==side3 && side1!==side3);
}
var noTriangle = function (side1,side2,side3){
  return (side1+side2<=side3 || side2+side3 <= side1 || side1+side3 <=side2);
}
