const countCharacters = (S) => 
{ let B=[0,0];
  for (const i of S){
    if (i==='A'){
      B[0]++;
    }
    if (i==='D'){
      B[1]++;
    }
  }
  return B
};