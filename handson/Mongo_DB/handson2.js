const { MongoClient } = require('mongodb');
const url = "mongodb://localhost/"

const client = new MongoClient(url);


async function main(){
    client.connect();
    
    const database = await client.db('Human_Resource');
    const collection = await database.collection('employee')
    const data = [
        {
          "firstName": "John",
          "lastName": "Doe",
          "salary": "25000",
          "department": "HR",
          "lastCompany": "X",
          "lastSalary": "10000",
          "overallExp": "2",
          "contactInfo": "1234567890",
          "yearGrad": "2016",
          "gradStream": "CSE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "roh",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        }]

    const response = await collection.insertMany(data);
    console.log(response);

    
    const response1 = await collection.find({"salary": {$dt: '30000'}}).toArray();
    console.log("response....",response1)


    const response2 =  await collection.find({"overallExp" : {$gt  : "2"}}).toArray();
    console.log("response...",response2)


    const response3 =  await collection.find({"yearGrad" : {$gt : "2015"},"overallExp" : {$gte : "1"}}).toArray();
    console.log("response...",response3)


    const response4 =  await collection.update(
        {
          "salary":{ $gt: "70000"}
        },
        {
            $set:{
                "salary":"65000"
            }
        }
    ).toArray();

    console.log("response...",response4)



    const response5 =  await collection.deleteMany({"lastCompany" : "Y"});
    console.log("response...",response5)

}
main()