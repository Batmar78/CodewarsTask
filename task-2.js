// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = (string) => string.split(" ");

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  let rna = "";
  for (const acid of dna) {
    if (acid === "T") {
      rna += "U";
    } else {
      rna += acid;
    }
  }
  return rna;
}

// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

let min = (list) => Math.min(...list);
let max = (list) => Math.max(...list);

// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const minNum = Math.min(...arr);
  if (toReturn === "index") {
    return arr.indexOf(minNum);
  }
  return minNum;  
}
