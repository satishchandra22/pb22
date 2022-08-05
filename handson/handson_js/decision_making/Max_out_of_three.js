const Max_out_of_three = (A,B,C) => {
    if (A===B && A===C){
      return -1
    } else if (B>=A && B>=C){
      return B
    } else if (A>=B && A>=C){
      return A
    } else{
      return C
    }
  
  };