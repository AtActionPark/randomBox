var fiss = ["N6","seth","duch","R1","froute","smidge","popo","kermit","popo","lgg","st","sergz"]
var nb  = [1,2,3,4,5,6,7,8,9,10]

$(document).ready(function(){
	$(".one").on('click', function () {
        $(".one > .result").html(rand(fiss))
    });
    $(".two").on('click', function () {
        $(".two > .result").html(rand(nb))
    });
})

rand = function(list){
	return list[Math.floor(Math.random()*list.length)]
}