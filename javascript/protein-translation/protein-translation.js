//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PROTEINS = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP'
}

export const translate = (rna) => {
  if (!rna) return [];
  let split = rna.match(/.{1,3}/g);
  let proteins = [];
  
  for (var i = 0; i < split.length; i++) {
    if (PROTEINS[split[i]] === 'STOP') return proteins;
    if (!PROTEINS[split[i]]) throw 'Invalid codon';
    proteins.push(PROTEINS[split[i]]);
  }

  return proteins;
};
