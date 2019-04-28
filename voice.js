document.addEventListener("keydown",fun);
			var tab = 9;
			function fun(event){
				console.log("tecla presionada ",event.keyCode);
				console.log("tabular");
				var x = document.activeElement.innerText.toString();
				console.log(x);
				
				readOutLoud(x);

			}
			function readOutLoud(message) {
    			var speech = new SpeechSynthesisUtterance();

		    	// Set the text and voice attributes.
    			speech.text = message;
    			speech.volume = 1;
    			speech.rate = 1;
    			speech.pitch = 1;
    			voices = window.speechSynthesis.getVoices()
   				speech.voice = voices[0];
    			speech.lang = voices[0].lang;

    			window.speechSynthesis.speak(speech);
   			}