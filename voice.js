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

    var texto = "zawaaarudo";
    readOutLoud(texto);