const letterFreq = {"A": 9, "B": 2, "C":2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2, "I": 9, "J": 1, "K": 1, "L": 4, "M": 2, "N": 6, "O": 8, "P": 2, "Q": 1, "R": 6, "S": 4, "T": 6, "U": 4, "V": 2, "W": 2, "X": 1, "Y": 2, "Z": 1}

const scoreChart = {"A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10}

const createAlpha = function(letterFreq) {
  let alphaArray = [];
  for (let key in letterFreq) {
    const letters = key.repeat(letterFreq[key]).split("");
      alphaArray = alphaArray.concat(letters);
  }
  return alphaArray
}

const Adagrams = {
  drawLetters() {
    const allLetters = createAlpha(letterFreq)
    let draw = []
    for (let i = 0; i < 10; i++) {
      let index = [Math.floor ( Math.random() * allLetters.length )]; draw.push(allLetters.splice(index, 1)[0]);
    }
    console.log(draw);
    return draw
  },

  usesAvailableLetters(input, lettersInHand) {
    let validPlay = true;
    const input_array = input.split("")
    input_array.forEach(letter => {
      if (!lettersInHand.includes(letter)) {
        validPlay = false
      } else {
        const letterIndex = lettersInHand.indexOf(letter);
        lettersInHand.splice(letterIndex, 1);
      }
    });
    return validPlay;
  },

  scoreWord(word) {
    let score = 0
    if (word.length >= 7) {
      score = 8;
    };

    word = word.toUpperCase();

    const wordArray = word.split("");
    
    wordArray.forEach(letter => {
      if (scoreChart[letter]) {
        score += (scoreChart[letter])
      }
    });
    return score
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
