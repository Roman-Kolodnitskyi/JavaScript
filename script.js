(function () {

  let helloSpeaker = {
    speakWord: "Hello",
    speak: function (name) {
      console.log(this.speakWord + " " + name);
    }
  };

  let goodbyeSpeaker = {
    speakWord: "Goodbye",
    speak: function (name) {
      console.log(this.speakWord + " " + name);
    }
  };

  // Масив імен
  let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      goodbyeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
