const findCount = (N, K, Arr) => 
{
   let count=0;
   for (const i of Arr){
     if (K===i){
       count++;
     }
   }
   return count;
};