const {MongoClient} = require("mongodb")

// const url="mongodb://127.0.0.1:27017";
const url=`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@blogcluster0.66i0kew.mongodb.net/BlogDB?retryWrites=true&w=majority`
const client=new MongoClient(url);

const insertHomeToDB = async (data) =>{
    try{
        const database = client.db("BlogDB"); 
        const collection = database.collection("home")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
    }
   catch(error){
    return error.message;
   }
}
const findHomeInDb=async(query)=>{
    try{
        const database=client.db("BlogDB");
        const collection=database.collection("home");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}

const insertBollywoodToDB = async (data) =>{
    try{
        const database = client.db("BlogDB"); 
        const collection = database.collection("bollywood")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
    }
   catch(error){
    return error.message;
   }
}

const findBollywoodInDb=async(query)=>{
    try{
        const database=client.db("BlogDB");
        const collection=database.collection("bollywood");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}

const insertHollywoodToDB = async (data) =>{
    try{
        const database = client.db("BlogDB"); 
        const collection = database.collection("hollywood")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
    }
   catch(error){
    return error.message;
   }
}

const findHollywoodInDb=async(query)=>{
    try{
        const database=client.db("BlogDB");
        const collection=database.collection("hollywood");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}

const insertTechnologyToDB = async (data) =>{
    try{
        const database = client.db("BlogDB"); 
        const collection = database.collection("technology")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
    }
   catch(error){
    return error.message;
   }
}

const findTechnologyInDb=async(query)=>{
    try{
        const database=client.db("BlogDB");
        const collection=database.collection("technology");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}

const insertFoodToDB = async (data) =>{
    try{
        const database = client.db("BlogDB"); 
        const collection = database.collection("food")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
    }
   catch(error){
    return error.message;
   }
}

const findFoodInDb=async(query)=>{
    try{
        const database=client.db("BlogDB");
        const collection=database.collection("food");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}

const insertFitnessToDB = async (data) =>{
    try{
        const database = client.db("BlogDB"); 
        const collection = database.collection("fitness")
        await client.connect();
        const dbResponse=await collection.insertMany(data) 
        await client.close(); 
        return dbResponse;
    }
   catch(error){
    return error.message;
   }
}

const findFitnessInDb=async(query)=>{
    try{
        const database=client.db("BlogDB");
        const collection=database.collection("fitness");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}

module.exports={
    insertHomeToDB,insertBollywoodToDB,insertHollywoodToDB,insertTechnologyToDB,insertFoodToDB,insertFitnessToDB,findHomeInDb,findBollywoodInDb,findHollywoodInDb,findFoodInDb,findFitnessInDb,findTechnologyInDb
}
