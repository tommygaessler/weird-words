const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var weirdWord = 'What, is your name!';

function weirdWords(alphabet, input) {
  var output = [];

  input = input.split('');

  input.forEach(function(letter, index) {

    if (letter === ' ') {
      output.push(letter);
    } else if (!!letter.match(/^[.,:!?]/) ) {
      output.push(letter);
    } else if (letter === 'Z' && letter === letter.toUpperCase()) {
      output.push('A');
    } else if (letter === 'z') {
      output.push('a');
    } else if (letter === letter.toUpperCase()) {

      var newindex = alphabet.indexOf(letter.toLowerCase())+1;

      output.push(alphabet[newindex].toUpperCase());
    } else {

      var newindex = alphabet.indexOf(letter.toLowerCase())+1;

      output.push(alphabet[newindex]);
    }
  });

  return output.join('');
}

console.log(weirdWords(alphabet, weirdWord));
