const mongoClient = require("../database/connection")

const HomeEnrollment = async(req,res)=>{
    const homeData=req.body;
    try{
        const result = await mongoClient.insertHomeToDB(homeData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getHomeData=async (req,res)=>{
        const queryParams=req.query;
        console.log(queryParams);
        try{
            const result=await mongoClient.findHomeInDb(queryParams);
            console.log("the result of database operation =>",result);
            return res.status(200).send(result);
        }
        catch(error){
            console.log("Something went wrong while performing db operation");
            return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
        }
}
    
const BollywoodEnrollment = async(req,res)=>{
    const bollywoodData=req.body;
    try{
        const result = await mongoClient.insertBollywoodToDB(bollywoodData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getBollywoodData=async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams);
    try{
        const result=await mongoClient.findBollywoodInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const TechnologyEnrollment = async(req,res)=>{
    const technologyData=req.body;
    try{
        const result = await mongoClient.insertTechnologyToDB(technologyData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getTechnologyData=async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams);
    try{
        const result=await mongoClient.findTechnologyInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const HollywoodEnrollment = async(req,res)=>{
    const hollywoodData=req.body;
    try{
        const result = await mongoClient.insertHollywoodToDB(hollywoodData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getHollywoodData=async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams);
    try{
        const result=await mongoClient.findHollywoodInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const FoodEnrollment = async(req,res)=>{
    const foodData=req.body;
    try{
        const result = await mongoClient.insertFoodToDB(foodData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getFoodData=async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams);
    try{
        const result=await mongoClient.findFoodInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const FitnessEnrollment = async(req,res)=>{
    const fitnessData=req.body;
    try{
        const result = await mongoClient.insertFitnessToDB(fitnessData);
        console.log("The result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getFitnessData=async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams);
    try{
        const result=await mongoClient.findFitnessInDb(queryParams);
        console.log("the result of database operation =>",result);
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

module.exports={
    BollywoodEnrollment,HollywoodEnrollment,FoodEnrollment,FitnessEnrollment,TechnologyEnrollment,HomeEnrollment,getBollywoodData,getFoodData,getHollywoodData,getTechnologyData,getFitnessData,getHomeData
}