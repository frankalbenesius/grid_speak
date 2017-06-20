
function getRandomColor() {
  // var letters = '0123456789ABCDEF';
  var letters = 'ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}


// just a stupid list so I can speak the word
var words = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty-one',
  'twenty-two',
  'twenty-three',
  'twenty-four',
  'twenty-five',
  'twenty-six',
  'twenty-seven',
  'twenty-eight',
  'twenty-nine',
  'thirty',
  'thirty-one',
  'thirty-two',
  'thirty-three',
  'thirty-four',
  'thirty-five',
  'thirty-six'
];
function speak(num) {
  return function() {
    responsiveVoice.speak(words[num]);
  }
}

function appendSquare(ele, num) {
  var square = document.createElement('div');
  square.className = 'square';
  
  var label = document.createElement('span');
  label.className = 'label';
  label.innerHTML = num;
  
  square.appendChild(label);
  square.style.backgroundColor = getRandomColor();
  
  square.addEventListener('click', speak(num - 1));
  
  ele.appendChild(square);
}

var album = document.getElementById('album');
for(i = 1; i <= 36; i++) {
  appendSquare(album, i);
}