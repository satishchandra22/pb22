const isEligible = (a) => {
    return a>=18 ? 'Eligible for Voting': 'Not Eligible for Voting';
  };
  
  const findRelation = (x,y) => {
    if (x<y){
      return x+' is smaller than '+y
    }else if (x>y){
      return x+' is greater than '+y
    }else {
      return x+' is equal to '+y
    }
  };