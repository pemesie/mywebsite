  
  
  window.addEventListener('keydown', function(e){ // playSound()
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');    
  });

  function removeTransition(e){ // ()
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));


/* Navigation Bar Toggle */
  $(document).ready(function(){
    $("button.toggle-button").click(function(){
        if($("button.toggle-button").text() == "☰"){    
           $("button.toggle-button").css('margin-left', '293px');
            $("button.toggle-button").text("X");
            $("div.dropdown").css('margin-left', '200px');
        }
        else{
            $("button.toggle-button").text("☰");
            $("button.toggle-button").css('margin-left', '0' );
            $("div.dropdown").css('margin-left', '300px')
        }
        $("nav").toggle(100);
    });
});



