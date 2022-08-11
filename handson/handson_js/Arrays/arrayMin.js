function arrayMin(arr) {
    let min=10000000;
    for (const i of arr){
      if (i<min){
        min=i;
      }
    }
    return min
  
  }
  
  function arrayMax(arr) {
   
   let max=0;
   for (const i of arr){
     if (i>max){
       max=i;
     }
   }
   return max
  }