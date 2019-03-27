function open_panel(){
    slideIt();
    var a = document.getElementById("notificationIcon");
    a.setAttribute("id", "notificationIcon1");
    a.setAttribute("onclick", "close_panel()");
}

function slideIt(){
    var slidingDiv = document.getElementById("notificationPanel");
    var stopPosition = 0;
    
    if (parseInt(slidingDiv.style.right) < stopPosition)
    {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
        setTimeout(slideIt, 1);
    }
}

function close_panel(){
    slideIn();
    a = document.getElementById("notificationIcon1");
    a.setAttribute("id", "notificationIcon");
    a.setAttribute("onclick", "open_panel()");
}

function slideIn(){
    var slidingDiv = document.getElementById("notificationPanel");
    var stopPosition = -236;
    
    if (parseInt(slidingDiv.style.right) > stopPosition)
    {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
        setTimeout(slideIn, 1);
    }
}
