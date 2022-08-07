const Find_Five = (N) => 
{ let count=0;
	while (N>0){
	  let d=N%10;
	  if (d===5){
	    count++
	  }
	  N=(N-N%10)/10
	}
	return count
};