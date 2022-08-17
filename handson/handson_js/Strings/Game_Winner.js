var Game_Winner = (S) => 
{
  let a=0;
  let d=0;
  for (const i of S){
    if (i==='A'){
      a++;
    }else{
      d++;
    }
  }
  if (a>d){
    return 'Aditya';
  }else if (d>a){
    return 'Danish';
  }else{
    return 'Draw';
  }
}