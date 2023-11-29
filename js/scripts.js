var dog = $("#Doggo")
var cat = $("#Cat")
var plant = $("#Plant")
var meow = document.getElementById("meow")
var bark = document.getElementById("bark")

dog.hide();
cat.hide();

$("#Chair-seat").on("click", function () {
    dog.fadeToggle();

})

$("#Chair").on("click", function () {
    cat.fadeToggle();
})

dog.on("click", function () {
    bark.play()
    $("#Doggo .cls-8").css("fill", "red")
})

cat.on("click", function () {
    meow.play()
    $("#Cat .cls-8").css("fill", "purple")
})

$(document).on("keypress", function (e) {
    //console.log(e)
    if (e.key == " ") {
        console.log("tip plant over")
        plant.css("transform", "rotate(90deg)")
    }
})