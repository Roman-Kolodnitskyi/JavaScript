let helloSpeaker = (function(window) {
  let speakWord = "Hello";
  return {
    speak: function(name) {
      console.log(speakWord + " " + name);
      return this; 
    }
  };
})(window);
