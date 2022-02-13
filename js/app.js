$(document).ready(function(){
$(".distrib").click(function(){
$(".distributeur").css({"left":"0%"});
$(".admin").css({"right":"100%"});
});

$(".admn").click(function(){
    $(".distributeur").css({"left":"100%"});
    $(".admin").css({"right":"0%"});
    });
    
});