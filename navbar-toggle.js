$(document).ready(function(){
    $("button.toggle-button").click(function(){
        if($("button.toggle-button").text() == "☰"){
            
           $("button.toggle-button").css('margin-left', '298px');
            $("button.toggle-button").text("X");
        }
        else{
            $("button.toggle-button").text("☰");
           $("button.toggle-button").css('margin-left', '0' );
        }

        $("nav").toggle(100);
    });
});

