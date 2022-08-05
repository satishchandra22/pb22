const findGrades = (a) => {
    if (a<=10){
      return 'E'
    }else if (a<=20){
      return 'D'
    }else if (a<=30){
      return 'C'
    }else if (a<=40){
      return 'B'
    }else {
      return 'A'
    }
  };