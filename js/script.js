var fiss = ["N6","seth","duch","R1","froute","smidge","popo","kermit","popo","lgg","st","sergz","diggy", "bobol","shirow", "putois","yann","fred","lonewolf", "inu","piston", "dom"]

$(document).ready(function(){
	$("#one").on('click', function () {
        $("#one > div >  span").html(rand(fiss))
    });
    $("#two").on('click', function () {
        $("#two > div >  span").html(rand(fiss))
    });
    $("#three").on('click', function () {
        $("#three > div >  span").html(rand(fiss))
    });
    $("#four").on('click', function () {
        $("#four > div >  span").html(rand(fiss))
    });
    $("#five").on('click', function () {
        $("#five > div >  span").html(rand(fiss))
    });
    $("#six").on('click', function () {
        $("#six > div >  span").html(rand(fiss))
    });
    $("#seven").on('click', function () {
        $("#seven > div >  span").html(rand(fiss))
    });
    $("#eight").on('click', function () {
        $("#eight > div >  span").html(rand(fiss))
    });
    $("#nine").on('click', function () {
        $("#nine > div >  span").html(rand(fiss))
    });
})

rand = function(list){
	return list[Math.floor(Math.random()*list.length)]
}