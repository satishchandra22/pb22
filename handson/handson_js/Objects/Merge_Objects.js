function Check(obj1,obj2) {
    for(const [key, value] of Object.entries(obj2)) {
        obj1[key] = value;
     }
     
     return obj1;
 }