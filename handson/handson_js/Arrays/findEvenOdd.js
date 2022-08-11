const findEvenOdd = (N, Arr) => 
{
  let B=[];
  let oddsum=0;
  let evensum=0;
  for (const i of Arr){
    if (i%2===0){
      oddsum=oddsum+i;
    }else{
      evensum=evensum+i;
    }
  }
  B[0]=oddsum;
  B[1]=evensum;
  return B
};