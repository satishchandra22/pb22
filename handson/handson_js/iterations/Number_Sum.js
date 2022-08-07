const Number_Sum = (N) => 
{ let sum=0;
	while(N>0){
	  sum=sum+N%10;
	  N=(N-N%10)/10;
	}
	return sum;
};