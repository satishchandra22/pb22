var Minimal_Angle = (h, m) => 
{
  let result=0  ;
  if (30*h >= 6*m){
    result= (360/12)*h-(360/60)*m+m*0.5;
  }else{
    result=6*m-30*h-m*0.5;
  }
  if (result<=180){
    return result;
  }else{
    return 360-result;
  }
};