MongoDB handson-1 : using mongoshell

Create a database , give it name like "Human_Resource". Create a collection inside this named "employee"

test> show dbs

Human_Resource  0.000GB
admin           0.000GB
config          0.000GB
earth           0.000GB
fasna           0.000GB
inventory       0.000GB
local           0.000GB

> use Human_Resource
switched to db Human_Resource
Query the collection "employee" and list all the documents  

> db.employee.insertMany([{   "_id": {     "oid": "61cc5034af6ba4fcb54e8c38"   },   "firstName": "John",   "lastName": "Doe",   "salary": "25000",   "department": "HR",   "lastCompany": "X",   "lastSalary": "10000",   "overallExp": "2",   "contactInfo": "1234567890",   "yearGrad": "2016",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc522daf6ba4fcb54e8c3a"   },   "firstName": "Rohan",   "lastName": "Jame",   "salary": "30000",   "department": "Technical",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "1",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc522daf6ba4fcb54e8c3b"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "20000",   "overallExp": "1",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "ECE" },{   "_id": {     "oid": "61cc522daf6ba4fcb54e8c3c"   },   "firstName": "Sao",   "lastName": "Avika",   "salary": "30000",   "department": "Sales",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc522daf6ba4fcb54e8c3d"   },   "firstName": "Jame",   "lastName": "roh",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "EEE" },{   "_id": {     "oid": "61cc533baf6ba4fcb54e8c3e"   },   "firstName": "Rohan",   "lastName": "Jame",   "salary": "30000",   "department": "Technical",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "1",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc533baf6ba4fcb54e8c3f"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "20000",   "overallExp": "1",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "ECE" },{   "_id": {     "oid": "61cc533baf6ba4fcb54e8c40"   },   "firstName": "Sao",   "lastName": "Avika",   "salary": "30000",   "department": "Sales",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc533baf6ba4fcb54e8c41"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "EEE" },{   "_id": {     "oid": "61cc5515af6ba4fcb54e8c42"   },   "firstName": "Rohan",   "lastName": "Jame",   "salary": "30000",   "department": "Technical",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "1",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc5515af6ba4fcb54e8c43"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "20000",   "overallExp": "1",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "ECE" },{   "_id": {     "oid": "61cc5515af6ba4fcb54e8c44"   },   "firstName": "Sao",   "lastName": "Avika",   "salary": "30000",   "department": "Sales",   "lastCompany": "Y",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "1234567860",   "yearGrad": "2015",   "gradStream": "CSE" },{   "_id": {     "oid": "61cc5515af6ba4fcb54e8c45"   },   "firstName": "Jame",   "lastName": "Doe",   "salary": "35000",   "department": "Accounts",   "lastCompany": "Z",   "lastSalary": "15000",   "overallExp": "2",   "contactInfo": "123567890",   "yearGrad": "2019",   "gradStream": "EEE" }])

db.employee.find().pretty()
{
        "_id" : {
                "oid" : "61cc5034af6ba4fcb54e8c38"
        },
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : {
                "oid" : "61cc522daf6ba4fcb54e8c3a"
        },
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : {
                "oid" : "61cc522daf6ba4fcb54e8c3b"
        },
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : {
                "oid" : "61cc522daf6ba4fcb54e8c3c"
        },
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : {
                "oid" : "61cc522daf6ba4fcb54e8c3d"
        },
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : {
                "oid" : "61cc533baf6ba4fcb54e8c3e"
        },
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : {
                "oid" : "61cc533baf6ba4fcb54e8c3f"
        },
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : {
                "oid" : "61cc533baf6ba4fcb54e8c40"
        },
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : {
                "oid" : "61cc533baf6ba4fcb54e8c41"
        },
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : {
                "oid" : "61cc5515af6ba4fcb54e8c42"
        },
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : {
                "oid" : "61cc5515af6ba4fcb54e8c43"
        },
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : {
                "oid" : "61cc5515af6ba4fcb54e8c44"
        },
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : {
                "oid" : "61cc5515af6ba4fcb54e8c45"
        },
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}


Query the collection "employee" and list the employees who are having salary more than 30000

db.employee.find({salary:{$gt:"30000"}})
{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3b" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3d" }, "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c3f" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c41" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c43" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c45" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
>



Query the collection "employee" and list the employees who are having experience more than 2 years.


db.employee.find({overallExp:{$gt:"2"}})


Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year 

 db.employee.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
{ "_id" : { "oid" : "61cc5034af6ba4fcb54e8c38" }, "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3d" }, "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c41" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c45" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }


Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.

db.employee.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }


Delete all the documents from "employee" where last company is Y

 db.employee.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 6 }