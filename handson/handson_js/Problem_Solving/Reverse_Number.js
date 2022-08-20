var Reverse_Number = (N) => 
{
  let result=0;
  while (N!==0){
    result=result*10+(N%10);
    N=(N-(N%10))/10;
  }
  return result;
};