
let count = 0;
let environmentTitle = "in the zone";

let environmentElements = ["skate", "surf", "ski", "birds","fish"];

let mainEntity = {
    name: "fun things",
    type: "earth",
    mood: "chill",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$("#fish").click(function () {
    count = count + 1;
    let message = "<p> you counted " + count + " fish.</p>";
    $("#output").html(message);

});