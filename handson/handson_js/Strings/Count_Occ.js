var Count_Occ = (s) => 
{ let i=0;
  let result='';
  a=s.split('');
  a.sort();
  while(i<s.length){
    if (a.indexOf(a[i])===a.lastIndexOf(a[i])){
      i++
    }else{
      result=result+a[i]+(a.lastIndexOf(a[i])-a.indexOf(a[i])+1);
      i=a.lastIndexOf(a[i])+1;
    }
  }
  return result;
};
console.log(Count_Occ('hhhsjskaaww'));