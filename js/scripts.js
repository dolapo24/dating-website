$(document).ready(function() {
    $("form#apply").submit(function(e) {
      let gender = $("select#gender").val();

      if (gender === 'male') {
        window.location = "/female.html"
      }else {
        window.locatio= "/male.html"
      }

      e.preventDefault();
    });

    $("form#match").submit(function(e) {
      const personality = $("select#personality").val();
      const color = $("select#color").val();
      const animal = $("select#animal").val();
      const shape = $("select#shape").val();
      const complexity = $("select#complexity").val();
      const height = $("select#height").val();

      if (personality === "introvert" && color === "blue" && animal === "cat" && shape === "muscular" &&
      complexity === "dark" && height === "tall") {
        $("#match").hide();
        $("#match1").show();
      } else if (
        (personality === "extrovert" && color === "black" && animal === "dog" && shape === "slim" &&
      complexity === "fair" && height === "short")
      )

      e.preventDefault();
    })
});