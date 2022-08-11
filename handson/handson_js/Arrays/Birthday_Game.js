function Birthday_Game(arr,D ,M) {
    count=0;
   for (i=0;i<=arr.length-M;i++){
     sum=0;
     for (j=0;j<M;j++){
       sum=sum+arr[i+j];
     }
     if (sum===D){
       count++;
     }
   }
   return count;
   }