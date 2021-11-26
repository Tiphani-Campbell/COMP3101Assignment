$(document).ready(function() {
    $("main").load("home.html");
    $("#webname").click(function() {
        event.preventDefault();
        $("main").load("home.html");
    });

    $("#rtime").click(function() {
        event.preventDefault();
        $("main").load("priority.html");        
    });

    $("#roundr").click(function() {
        event.preventDefault();
        $("main").load("roundrobin.html");        
    });

    $("#fcome").click(function() {
        event.preventDefault();
        $("main").load("fcfs.html");        
    });

    $("#jobfirst").click(function() {
        event.preventDefault();
        $("main").load("shortest-job-first.html");
    });  

});