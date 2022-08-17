

// Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef

const unique=(str)=>{
    const a=new Set(str.split(''));
    let b=[];
    for (const i of a){
        b.push(i)
    }
    return b.join('');
}
console.log(unique('abcadeecfb'));




// Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1
const alphabetCount = (str)=>{
    let a = new Map([]);
    let b=[]
    for (const i of str){
      if (b.includes(i)){
        a[i]++;
      }else{
        a[i]=1;
        b.push(i);
      }
    }
    return a;
}
console.log(alphabetCount('abcadeecfb'))
