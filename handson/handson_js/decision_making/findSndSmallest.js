const findSndSmallest = (x,y,z) => {
    if((x < y && y < z) || (z < y && y < x)){
      return y;
    }else if((y < x && x < z) || (z < x && x < y)){
      return x;
    }else{
      return z;
    } 
 };