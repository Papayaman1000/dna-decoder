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