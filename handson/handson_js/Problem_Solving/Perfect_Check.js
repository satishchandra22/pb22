var Perfect_Check = (N) => 
{
  if (N===1){
    return 'YES';
  }
  let sum=0;
  for (i=1;i<N;i++){
    if (N%i===0){
      sum=sum+i;
    }
  }
  if (sum===N){
    return 'YES';
  }else {
    return 'NO';
  }
        
};