const Calculator = (A, B, C) => 
{
	
  let out; 
 switch(A) {
      case '+':
      out=B+C;
      break;

      case '-':
      out=B-C;
      break;

      case '*':
      out=B*C;
      break;

      case '/':
      out=B/C;
      break;
}
 return out;
}