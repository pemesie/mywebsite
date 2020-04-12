
// Georges Nchouwat

$(document).ready(function(){
    let previousPointer = 1;
    let nextPointer = 3;
    const $element = $(".slideshowContainer");
    // Find number of sliders in the div. Substract the 2 last children which aren't sliders.
    const nberOfSliders =  $(".slideshowContainer").children().length - 2;

// ----------- Functions definition -------
    function actionOnSliderPrevious(){
        if(previousPointer >= 1 & previousPointer < nberOfSliders - 2){
            //hide slider # previousPointer
            $($element).find(`.slide${previousPointer}`).css("display", "none") ;
            // display slider # previousPointer+2
            $($element).find(`.slide${previousPointer + 3}`).css("display", "block") ;
            previousPointer++;
            nextPointer++;
        }
    }

    function actionOnSliderNext(){
        if(nextPointer > 3 & nextPointer < nberOfSliders + 1){
            //display slider # nextPointer + 1
            $($element).find(`.slide${nextPointer}`).css("display", "none");
            //hide slide # nextPointer - 2
            $($element).find(`.slide${nextPointer - 3}`).css("display", "block");
            nextPointer--;
            previousPointer--;
        }
    }
    
    init = function(){
        let $previousElement = $("#prev");
        let $nextElement = $("#next");
        $previousElement.on("click", actionOnSliderPrevious);
        $nextElement.on("click", actionOnSliderNext);
    }
    
// -----------------------------------------------------------------------
    init();

// Handle interaction in mobile mode
    $("#hambergerMenu").on("click", () => {
        console.log("hamberger");
        const $node = $("#nav");
        if(!$node.is(":visible")){
            $node.css("display", "block");
        }
        else{
            $node.css("display", "none");
        }
    });


});



