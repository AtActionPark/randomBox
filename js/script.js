var fiss = ["N6","seth","duch","R1","froute","smidge","popo","kermit","popo","lgg","st","sergz","diggy", "bobol","shirow", "putois","yann","fred","lonewolf", "inu","piston", "dom"]

$(document).ready(function(){
	$(".one").on('click', function () {
        $(".one").html(rand(fiss))
    });
    $(".two").on('click', function () {
        $(".two").html(rand(fiss))
    });
    $(".three").on('click', function () {
        $(".three").html(rand(fiss))
    });
    $(".four").on('click', function () {
        $(".four").html(rand(fiss))
    });
    $(".five").on('click', function () {
        $(".five").html(rand(fiss))
    });
    $(".six").on('click', function () {
        $(".six").html(rand(fiss))
    });
})

rand = function(list){
	return list[Math.floor(Math.random()*list.length)]
}