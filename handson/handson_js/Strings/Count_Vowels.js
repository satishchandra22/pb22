var Count_Vowels= (S) => 
{ let lower=['a','e','i','o','u'];
  let count=0;
  S=S.toLowerCase();
  for (const i of S){
    if (lower.includes(i)){
      count++;
    }
  }
  return count;
};