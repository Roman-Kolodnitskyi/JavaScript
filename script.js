(function () {

  let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0).toLowerCase();
    let lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();

    if (["a", "e", "i", "o", "u", "y"].includes(lastLetter)) {
      console.log("Hi " + names[i]);
    }
    else if (firstLetter === 'j') {
      goodbyeSpeaker.speak(names[i]);
    } 
    else {
      helloSpeaker.speak(names[i]);
    }
  }

})();