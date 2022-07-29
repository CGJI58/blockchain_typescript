type Words = {
  [key: string]: string;
};

class Word {
  constructor(public term: string, public def: string) {}
}
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
      console.log(`Word '${word.term}' has been added.`);
    } else {
      console.log(`Word '${word.term}' is already in the dictionary.`);
    }
  }
  getDef(term: string) {
    if (this.words[term] === undefined) {
      console.log(`Cannot find word: ${term}`);
      return;
    } else {
      return this.words[term];
    }
  }
  del(term: string) {
    if (Object.keys(this.words).includes(term)) {
      delete this.words[term];
      console.log(`${term} has been deleted.`);
    } else {
      console.log(`Cannot find word: ${term}`);
    }
  }
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();

// test add / del
// dict.add(kimchi);
// dict.add(kimchi);
// dict.del("kimchi");
// dict.del("kimchi");

// test getDef
// const mydef = dict.getDef("kimchi");
// console.log(mydef);

//내일 update, showAll, count 구현할 것.
//https://www.typescriptlang.org/play?#code/C4TwDgpgBA6g9gJwCYGcoF4oG8CwAoKKAbQGsIQAuKFYBASwDsBzAXSpvuYG58BfHvPgDGAGwCGKNPGTZ8hIXAYcArkOCIAFGGUAjEXSFRgEBAFt2tRkwA0UbXoNQkEAGYXOTAJTZefYeMkoABEDYFkCO3oANzFjKAB3RFQqaVQBeUUVNU1vXAjCYAALOhQAOkTkNEwsfjkoXwixJCQNCqQUpNy6wjoXKA0ikvKklCI20uMzFgx0TGUGZxdGCCQu-MIjYrK20fHJ02nMccX0jYylOBEIUpE4Jg0AA1SoAHIAEiw9k1NeF6hCiRQHQQCAMKBNZxIUoPTynQgNM4QEQoaB5M7nFCXa63e5PJKvD5fMy-KAlcEiBAQJogUlgorQJChOiKMQIEDQ2Hdep1BFQJgQYBBVwDb7uKxrM69fqDbYjIj7Q6zKDzRbLVbhdFQBQXK43O6PADCYgYDDgYSWCwSSSoH32vBhcI2lOAygQDC5vMISJRGvRztddK2w0q8u+LEdvN5zhEIrMYuYEo2vQ0AHkdAArCBqUpkEAoAZBnaeUqMUTKZz5-aeRNnaMC6Ay4OoUNTR0YrF63G2768f6A4GgpxI+tQh0erne1Fc9u6nGG42m82MJBW5A2rB2sfrSN+QR4bU0KAkOimITFDBQBgQeKwJIaABEx9PxXvtnvgB1VwC2tYANcaggBlxwBdofvTl90yMJGTUC8rxvEI1A0ED8AAekQowIEPCEoBQ6MkKw0JSghDQnzPOgQOQpw8IIojilI3Ds2jB8qLoYCBDIiDgFKejHxPYjmPwHDUMPflBVcfiDzCUwQEWC82NKIShRcBjuJfGitUyDs5wkxYELwZDABaGwAfceVMAkFiCBbBQQo4HiABBEQRFsBR5jCQAbWsAEDXAANVqBAGCa0ogA
