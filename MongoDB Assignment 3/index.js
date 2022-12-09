const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/Human_Resource";
const Schema = mongoose.Schema;

const empSchema = new Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    salary: {
        type: Number,
        require: true,
    },
    department: {
        type: String,
        require: true,
    },
    lastCompany: {
        type: String,
        require: true,
    },
    lastSalary: {
        type: Number,
        require: true,
    },
    overallExp: {
        type: Number,
        require: true,
    },
    contactInfo: {
        type: Number,
        require: true,
    },
    yearGrad: {
        type: Number,
        require: true,
    },
    gradStream: {
        type: String,
        require: true,
    }
});

async function main() {
    try {
        console.log("connecting");
        //connect to db
        await mongoose.connect(url);
    console.log("new client connected......");

    //Q1. Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""

    const collectionData = mongoose.model("employee", empSchema);

    const dataEmployee = new collectionData(
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
        })
    const dataEmployee1 = new collectionData({
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
    })
    const dataEmployee2 = new collectionData({
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
    })
    const dataEmployee3 = new collectionData({
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
    })
    const dataEmployee4 = new collectionData({
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
    });
    const dataEmployee5 = new collectionData({
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
    })
    const dataEmployee6 = new collectionData({
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
    })
    const dataEmployee7 = new collectionData({
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
    })
    const dataEmployee8 = new collectionData({
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
    })
    const dataEmployee9 = new collectionData({
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
    })
    const dataEmployee10 = new collectionData({
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
    })
    const dataEmployee11 = new collectionData({
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
    })
    const dataEmployee12 = new collectionData({
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
    })
    const employeeAllData=[
        dataEmployee,
        dataEmployee1,
        dataEmployee2,
        dataEmployee3,
        dataEmployee4,
        dataEmployee5,
        dataEmployee6,
        dataEmployee7,
        dataEmployee8,
        dataEmployee9,
        dataEmployee10,
        dataEmployee11,
        dataEmployee12,
    ]
    const response = await collectionData.insertMany(employeeAllData);
    console.log("response", response);
    const dataFind = await collectionData.find().toArray();
    console.log("find all data......................",dataFind);

    const findSalary = await collectionData.find({"salary" : {$gt:30000}},);
    console.log("finding salary.....................",findSalary);

    const findExp = await collectionData.find({"overallExp" : {$gt:2}},)
    console.log("overall experience................",findExp);

    const findGradExp = await collectionData.find({$and:[{yearGrad:{$gt:2015}},{overallExp:{$gt:1}}]});
    console.log("find grad.........",findGradExp);

    const updtSalary = await collectionData.updateMany({salary:{$gt:70000}},{$set:{salary:65000}});
    console.log("updateEmp",updtSalary);

    const deleteLast = await collectionData.deleteMany({lastCompany:"Y"});
    console.log(deleteLast);

} catch (error){
    console.log(error, "err");
}
}

main();