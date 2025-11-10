let goodbyeSpeaker = (function(window) {
  let speakWord = "Goodbye";

  return {
    speak: function(name) {
      console.log(speakWord + " " + name);
      return this;
    }
  };
})(window);


