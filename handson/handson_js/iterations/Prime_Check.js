const Prime_Check = (N) => 
{ if (N===1){
  return 'NO'
}
  let i=2;
	 while (i<N){
	   if (N%i===0){
	   return 'NO';
	   
	 }
	 i++;
	 }
	 
  return 'YES';
};