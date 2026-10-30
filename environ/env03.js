
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

$("#fishbuttom").click(function () {
    count = count + 1;
    let message = "<p> you counted " + count + " fish.</p>";
    $("#output").html(message);

});

$("#birdbuttom").click(function () {
    count = count + 1;
    let message = "<p> you counted " + count + " birds.</p>";
    $("#birdoutput").html(message);

});


function changebackground() {
    let userPrompt = prompt("Light or dark?");

    if (userPrompt == "light") {
        $("body").css("background", "orange");
    }

    else if (userPrompt == "dark") {
        $("body").css("background", "black");
    }

    else {
        alert("Please enter light or dark!");
    }
}

$("#background").click(function () {
    changebackground();
});