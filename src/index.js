const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let t = expr.match(/.{1,10}/g);
  let result = '';
  t.forEach(e=>{
    let l = e.split('').reverse();
    let morse = '';
    for (let p = 0; p< l.length; p++){
      if (l[p] == 0 && l[p+1] == 1){
        morse = '.' + morse
        p ++;
        continue;
      }

      if (l[p] == 1 && l[p+1] == 1){
        morse = '-' + morse
        p ++;
        continue;
      }

      if (l[p] == 0 && l[p+1] == 0){
        break;
      }
      if (l[p] == "*"){
        morse = ' ';
        break;
      }
    }

    result += morse==' '? morse : MORSE_TABLE[morse];
  })

  return result;
}

module.exports = {
    decode
}