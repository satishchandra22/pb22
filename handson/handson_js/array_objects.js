let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } 
] ;


//  "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

//   ['JOHN', 'BABA', 'YAGA', 'WICK']
          
let names=[];

for (const i of studentRecords){
    names.push(i.name.toUpperCase());
}
console.log(names);

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
let marks=[];
for (const i of studentRecords){
    if (i.marks>50){
        marks.push(i);
    }
}
console.log(marks);

// Question 3: Retrieve the details of students who scored more than 50 marks and 
// have id greater than 120.
let marks1=[]
for (const i of studentRecords){
    if (i.marks>50 && i.id>120){
        marks1.push(i);
    }
}
console.log(marks1);

// Question 4: Consider the same scenario we have discussed above, 
// but this time we would like to know the sum total of the marks of the students.

let marks_sum=0;
for (const i of studentRecords){
   marks_sum=marks_sum+i.marks;
}
console.log(`sum of marks of all students is ${marks_sum}`);

// Question 5: This time we want to get only the names of the students 
// who scored more than 50 marks from the same dataset used above.

let namesMoreThan50=[];
for (const i of studentRecords){
    if (i.marks>50){
       namesMoreThan50.push(i.name);
    }
}
console.log(namesMoreThan50);

// Question 6: This time we are required to print the sum of marks of 
// the students with id > 120.

let marks_120=0;
for (const i of studentRecords){
    if (i.id>120){
        marks_120+=i.marks;
    }
}
console.log(marks_120);

// Question 7: This time we are required to print the total marks of the students 
// with marks greater than 50 after a grace of 15 marks has been added to those 
// students who scored less than 50.

let sum_50=0;
for (const i of studentRecords){
    if (i.marks>50){
        sum_50+=i.marks;
    }else if (i.marks+15 >50){
        sum_50+=i.marks+15;
    }
}
console.log(sum_50);

// Create 6 objects , each object will have name, class, roll no as properties.
//  Store these objects in an array of objects. 

let arrayObject=[];
for (i=0;i<6;i++){
    arrayObject.push({name:'',class:'',roll:0})
}
console.log(arrayObject);