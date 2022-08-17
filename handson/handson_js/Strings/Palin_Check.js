var Palin_Check = (str) =>
{ const n=str.length;
  for (i=0;i<n/2;i++){
    if (str[i]!==str[n-i-1]){
      return 'False'
    }
  }
	 return 'True'
}