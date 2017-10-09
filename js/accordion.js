$(function () {
    $(".text").mouseover(function () {
        $(this).parent().stop(true).animate({"width":"600px"},1000).siblings().stop(true).animate({"width":"50px"},1000);
    });
});