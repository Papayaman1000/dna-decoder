// DNA decoding tool and RNA-to-English sentence maker.
// Creative Commons 3.0 CC-BY-NC licensed by Jared Albertson.

const dnaKey = {
  'a': 't',
  't': 'a',
  'c': 'g',
  'g': 'c'
};

const dnaToRnaKey = {
  'a': 'u',
  't': 'a',
  'c': 'g',
  'g': 'c'
};

const rnaToDnaKey = {
  'a': 't',
  'u': 'a',
  'c': 'g',
  'g': 'c'
};

const rnaToAminoAcidKey = {
  'uuu': 'phenylalanine',
  'uuc': 'phenylalanine',
  'uua': 'leucine',
  'uug': 'leucine',
  'ucu': 'serine',
  'ucc': 'serine',
  'uca': 'serine',
  'ucg': 'serine',
  'uau': 'tyrosine',
  'uac': 'tyrosine',
  'uaa': 'end',
  'uag': 'end',
  'ugu': 'cysteine',
  'ugc': 'cysteine',
  'uga': 'end',
  'ugg': 'tryptophan',
  'cuu': 'leucine',
  'cuc': 'leucine',
  'cua': 'leucine',
  'cug': 'leucine',
  'ccu': 'proline',
  'ccc': 'proline',
  'cca': 'proline',
  'ccg': 'proline',
  'cau': 'histidine',
  'cac': 'histidine',
  'caa': 'glutamine',
  'cag': 'glutamine',
  'cgu': 'arginine',
  'cgc': 'arginine',
  'cga': 'arginine',
  'cgg': 'arginine',
  'auu': 'isoleucine',
  'auc': 'isoleucine',
  'aua': 'isoleucine',
  'aug': 'methlonine(start)',
  'acu': 'threonine',
  'acc': 'threonine',
  'aca': 'threonine',
  'acg': 'threonine',
  'aau': 'asparagine',
  'aac': 'asparagine',
  'aaa': 'lysine',
  'aag': 'lysine',
  'agu': 'serine',
  'agc': 'serine',
  'aga': 'arginine',
  'agg': 'arginine',
  'guu': 'valine',
  'guc': 'valine',
  'gua': 'valine',
  'gug': 'valine',
  'gcu': 'alanine',
  'gcc': 'alanine',
  'gca': 'alanine',
  'gcg': 'alanine',
  'gau': 'aspartic_acid',
  'gac': 'aspartic_acid',
  'gaa': 'glutamic_acid',
  'gag': 'glutamic_acid',
  'ggu': 'glycine',
  'ggc': 'glycine',
  'gga': 'glycine',
  'ggg': 'glycine'
};

const rnaToEnglishKey = {
  'uuu': 'life',
  'uuc': 'code',
  'uua': 'dna',
  'uug': 'for',
  'ucu': 'informed',
  'ucc': 'must',
  'uca': 'together',
  'ucg': 'be',
  'uau': 'this',
  'uac': 'in',
  'uaa': 'we',
  'uag': '.',
  'ugu': 'little',
  'ugc': 'you',
  'uga': 'around',
  'ugg': 'read',
  'cuu': 'music',
  'cuc': 'love',
  'cua': 'i',
  'cug': 'roll',
  'ccu': 'subject',
  'ccc': 'biology',
  'cca': 'when',
  'ccg': 'is',
  'cau': 'pulled',
  'cac': 'rubber',
  'caa': 'old',
  'cag': 'breaks',
  'cgu': 'day',
  'cgc': 'water',
  'cga': 'drink',
  'cgg': 'every',
  'auu': 'an',
  'auc': 'band',
  'aua': 'rock',
  'aug': '>',
  'acu': 'dog',
  'acc': 'have',
  'aca': 'breath',
  'acg': 'funny',
  'aau': 'dresses',
  'aac': 'mother',
  'aaa': 'your',
  'aag': 'wears',
  'agu': 'beatles',
  'agc': 'best',
  'aga': 'the',
  'agg': 'are',
  'guu': 'nothing',
  'guc': 'dress',
  'gua': 'a',
  'gug': 'brother',
  'gcu': 'education',
  'gcc': 'much',
  'gca': 'so',
  'gcg': 'fun',
  'gau': 'and',
  'gac': 'demented',
  'gaa': 'all',
  'gag': 'puppies',
  'ggu': 'father',
  'ggc': 'to',
  'gga': 'door',
  'ggg': 'future'
};

const englishToRnaKey = {
  'life': 'uuu',
  'code': 'uuc',
  'dna': 'uua',
  'for': 'uug',
  'informed': 'ucu',
  'must': 'ucc',
  'together': 'uca',
  'be': 'ucg',
  'this': 'uau',
  'in': 'uac',
  'we': 'uaa',
  '.': 'uag',
  'little': 'ugu',
  'you': 'ugc',
  'around': 'uga',
  'read': 'ugg',
  'music': 'cuu',
  'love': 'cuc',
  'i': 'cua',
  'roll': 'cug',
  'subject': 'ccu',
  'biology': 'ccc',
  'when': 'cca',
  'is': 'ccg',
  'pulled': 'cau',
  'rubber': 'cac',
  'old': 'caa',
  'breaks': 'cag',
  'day': 'cgu',
  'water': 'cgc',
  'drink': 'cga',
  'every': 'cgg',
  'an': 'auu',
  'band': 'auc',
  'rock': 'aua',
  '>': 'aug',
  'dog': 'acu',
  'have': 'acc',
  'breath': 'aca',
  'funny': 'acg',
  'dresses': 'aau',
  'mother': 'aac',
  'your': 'aaa',
  'wears': 'aag',
  'beatles': 'agu',
  'best': 'agc',
  'the': 'aga',
  'are': 'agg',
  'nothing': 'guu',
  'dress': 'guc',
  'a': 'gua',
  'brother': 'gug',
  'education': 'gcu',
  'much': 'gcc',
  'so': 'gca',
  'fun': 'gcg',
  'and': 'gau',
  'demented': 'gac',
  'all': 'gaa',
  'puppies': 'gag',
  'father': 'ggu',
  'to': 'ggc',
  'door': 'gga',
  'future': 'ggg'
};

const cipherDecode = {
  "d",
  "space",
  "=",
  "1",
  "b",
  "divides",
  "y",
  "hyphen",
  "m",
  "4",
  "a",
  "decimal",
  "!",
  "?",
  "(",
  ";",
  "f",
  "t",
  "u",
  "p",
  "5",
  "space",
  ")",
  "space",
  "r",
  "n",
  "period",
  "space",
  "o",
  "9",
  "e",
  "x",
  "v",
  "w",
  "i",
  "q",
  "space",
  "oo",
  "7",
  "ng",
  ",",
  "%",
  "period",
  "-",
  "6",
  "+",
  "8",
  "*",
  "2",
  "0",
  "t",
  "3",
  "h",
  "s",
  "l",
  "hard-ch
  (such
  as
  CHose)",
  "th",
  "j",
  "slash",
  "z",
  "k",
  "e",
  "hard-g",
  ":"
}

const rnaToCipherKey = {
  'uuu': 'd',
  'uuc': ' ',
  'ccc': ' ',
  'ccg': ' ',
  'cag': ' ',
  'acu': ' ',
  'uua': '=',
  'uug': '1',
  'ucu': 'b',
  'uca': 'y',
  'ucg': '-',
  'uau': 'm',
  'uac': '4',
  'uaa': 'a',
  'ugu': '!',
  'ugc': '?',
  'uga': '(',
  'ugg': ';',
  'cuu': 'f',
  'cuc': 't',
  'gua': 't',
  'cua': 'u',
  'cug': 'p',
  'ccu': '5',
  'cca': ')',
  'cau': 'r',
  'cac': 'n',
  'caa': '.',
  'aaa': '.',
  'ucc': '.',
  'cgu': 'o',
  'cgc': '9',
  'cga': 'e',
  'ggc': 'e',
  'cgg': 'x',
  'auu': 'v',
  'auc': 'w',
  'aua': 'i',
  'aug': 'q',
  'acc': 'oo',
  'aca': '7',
  'acg': 'ng',
  'aau': ',',
  'aac': '%',
  'uag': '{',
  'aag': '}',
  'agu': '6',
  'agc': '+',
  'aga': '8',
  'agg': '*',
  'guu': '2',
  'guc': '0',
  'gug': '3',
  'gcu': 'h',
  'gcc': 's',
  'gca': 'l',
  'gcg': 'ch',
  'gau': 'th',
  'gac': 'j',
  'gaa': '/',
  'gag': 'z',
  'ggu': 'k',
  'gga': 'g',
  'ggg': ':'
};

const cipherToRnaKey = {
  'd': ['uuu'],
  ' ': ['uuc', 'ccc', 'ccg', 'cag', 'acu'],
  '=': ['uua'],
  '1': ['uug'],
  'b': ['ucu'],
  'y': ['uca'],
  '-': ['ucg'],
  'm': ['uau'],
  '4': ['uac'],
  'a': ['uaa'],
  '!': ['ugu'],
  '?': ['ugc'],
  '(': ['uga'],
  ';': ['ugg'],
  'f': ['cuu'],
  't': ['cuc', 'gua'],
  'u': ['cua'],
  'p': ['cug'],
  '5': ['ccu'],
  ')': ['cca'],
  'r': ['cau'],
  'n': ['cac'],
  '.': ['caa', 'aaa', 'ucc'],
  'o': ['cgu'],
  '9': ['cgc'],
  'e': ['cga', 'ggc'],
  'x': ['cgg'],
  'v': ['auu'],
  'w': ['auc'],
  'i': ['aua'],
  'q': ['aug'],
  'oo': ['acc'],
  '7': ['aca'],
  'ng': ['acg'],
  ',': ['aau'],
  '%': ['aac'],
  '{': ['uag'],
  '}': ['aag'],
  '6': ['agu'],
  '+': ['agc'],
  '8': ['aga'],
  '*': ['agg'],
  '2': ['guu'],
  '0': ['guc'],
  '3': ['gug'],
  'h': ['gcu'],
  's': ['gcc'],
  'l': ['gca'],
  'ch': ['gcg'],
  'th': ['gau'],
  'j': ['gac'],
  '/': ['gaa'],
  'z': ['gag'],
  'k': ['ggu'],
  'g': ['gga'],
  ':': ['ggg']
};


function dnaFlip(dnaStrand) {
  let basePairs = dnaStrand.toLowerCase().split('');
  for (var i = 0; i < basePairs.length; i++) {
    basePairs[i] = dnaKey[basePairs[i]];
  }
  return basePairs.join('');
}

function dnaToRna(codingDnaStrand) {
  let basePairs = codingDnaStrand.toLowerCase().split('');
  for (var i = 0; i < basePairs.length; i++) {
    basePairs[i] = dnaToRnaKey[basePairs[i]];
  }
  return basePairs.join('');
}

function rnaToDna(rnaStrand) {
  let basePairs = rnaStrand.toLowerCase().split('');
  for (var i = 0; i < basePairs.length; i++) {
    basePairs[i] = rnaToDnaKey[basePairs[i]];
  }
  return basePairs.join('');
}

function rnaToEnglish(rnaStrand) {
  let basePairs = rnaStrand.toLowerCase().match(/.{1,3}/g);
  for (var i = 0; i < basePairs.length; i++) {
    basePairs[i] = rnaToEnglishKey[basePairs[i]];
  }
  return basePairs.join(' ');
}

function rnaToAminoAcids(rnaStrand) {
  let basePairs = rnaStrand.toLowerCase().match(/.{1,3}/g);
  for (var i = 0; i < basePairs.length; i++) {
    basePairs[i] = rnaToAminoAcidKey[basePairs[i]];
  }
  return basePairs.join(' ');
}

function englishToRna(englishStr) {
  let words = englishStr.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = englishToRnaKey[words[i]];
  }
  return words.join('');
}

function dnaToAminoAcids(noncodingDnaStrand) {
  return rnaToAminoAcids(dnaToRna(dnaFlip(noncodingDnaStrand)));
}

function codingDnaToAminoAcids(codingDnaStrand) {
  return rnaToAminoAcids(dnaToRna(codingDnaStrand));
}

function noncodingDnaToRna(noncodingDnaStrand) {
  return dnaToRna(dnaFlip(noncodingDnaStrand));
}

function rnaToNoncodingDna(rnaStrand) {
  return dnaFlip(rnaToDna(rnaStrand));
}

function rnaToCipher(rnaStrand) {
  let basePairs = rnaStrand.toLowerCase().match(/.{1,3}/g);
  for (var i = 0; i < basePairs.length; i++) {
    basePairs[i] = rnaToCipherKey[basePairs[i]];
  }
  return basePairs.join('');
}

function cipherToRna(decryptedStr) {
  let characters = decryptedStr.toLowerCase().split('');
  for (var i = 0; i < basePairs.length; i++) {
    if (i + 1 < characters.length && Object.keys(cipherToRnaKey).indexOf(characters[i] + characters[i + 1]) > -1) {
      characters[i] += characters[i+1];
      characters.slice(i+1, 1);
    }
  }
  for (var j = 0; j < characters.length; j++) {
    characters[j] = cipherToRnaKey[characters[j][Math.floor(Math.random() * characters[j].length)]];
  }
  return characters.join('');
}
