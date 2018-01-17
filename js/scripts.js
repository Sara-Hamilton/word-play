$(document).ready(function() {
  $("#sentenceForm").submit(function(event){
    var phrase = $("input#sentence").val();
    var phraseElements = phrase.split(" ");
    console.log(phraseElements)
    console.log(phraseElements.length)
    console.log(phrase)
    var threes = [];
    phraseElements.forEach(function(phraseElement) {
      if (phraseElement.length >= 3) {
        threes.push(phraseElement);
      }
    });

    console.log(threes);
    var reverseThrees = threes.reverse();
    console.log(reverseThrees);
    var joinedReverseThrees = reverseThrees.join(" ");
    console.log(joinedReverseThrees)
    console.log(typeof joinedReverseThrees)

    alert("The reverse order of all words three letters or longer in your sentence is: " + joinedReverseThrees);

    event.preventDefault();
  });
});
