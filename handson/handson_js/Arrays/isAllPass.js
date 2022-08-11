const isAllPass = (N, Arr) => 
{
  for (const i of Arr){
    if  (i<32){
      return 'NO'
    }
  }
  return 'YES'
};