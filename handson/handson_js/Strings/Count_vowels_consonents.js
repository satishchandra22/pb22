var Count_Vowels= (S) => 
{
  S=S.toLowerCase();
  const a=['a','e','i','o','u'];
  count=0;
  for (const i of S){
    if (a.includes(i)){
      count++;
    }
  }
  return count;
};
var Count_Consonants= (S) => 
{
  return S.length-Count_Vowels(S);   
};