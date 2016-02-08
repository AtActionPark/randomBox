var fiss = ["N6","seth","duch","R1","froute","smidge","popo","kermit","popo","lgg","st","sergz","diggy", "bobol","shirow", "putois","yann","fred","lonewolf", "inu","piston", "dom"]

$(document).ready(function(){
	$("#one").on('click', function () {
        $("#one > span").html(rand(fiss))
        $("#one").css("background-color", "white");
    });
    $("#two").on('click', function () {
        $("#two > span").html(rand(fiss))
        $("#two").css("background-color", "white");
    });
    $("#three").on('click', function () {
        $("#three > span").html(rand(fiss))
        $("#three").css("background-color", "white");
    });
    $("#four").on('click', function () {
        $("#four > span").html(rand(fiss))
        $("#four").css("background-color", "white");
    });
    $("#five").on('click', function () {
        $("#five > span").html(rand(fiss))
        $("#five").css("background-color", "white");
    });
    $("#six").on('click', function () {
        $("#six > span").html(rand(fiss))
        $("#six").css("background-color", "white");
    });
})

rand = function(list){
	return list[Math.floor(Math.random()*list.length)]
}