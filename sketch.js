window.onload = function() {
    setTimeout(function() {
    var audioCtx =  new (window.AudioContext || window.webkitAudioContext);
    var oscillator = new OscillatorNode(audioCtx);
    oscillator.start();
    oscillator.connect(audioCtx.destination);
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
}, 2000);
}