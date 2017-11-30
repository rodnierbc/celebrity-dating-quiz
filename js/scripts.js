$(document).ready(function() {
//  $('#actor-Form').validator();
    $("form#actor-Form").validator().on('submit', function(event) {
      var age = parseInt($("#inputAge").val());
      var food = $("#food").val();
      var sex = $("input:radio[name=sex]:checked").val();
      if(age >= 30 && sex === "male" && (food === "Sushi" || food === "Pizza" || food === "Noodles")){
        //$(".animalName-title").text(animal);
        $("#actors").show();
        $("#angelinaJ").hide();
        $("#leonardoD").show();
      }
      if(age >= 30 && sex === "female" && (food === "Sushi" || food === "Pizza" || food === "Noodles")){
        //$(".animalName-title").text(animal);
        $("#actors").show();
        $("#leonardoD").hide();
        $("#angelinaJ").show();
      }
      event.preventDefault();
  });
});
