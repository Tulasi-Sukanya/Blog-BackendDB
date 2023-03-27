const express=require("express");
const BlogController = require("../Controllers/BlogEnrollment")

const router=express.Router();

router.post('/home',BlogController.HomeEnrollment);
router.post('/bollywood',BlogController.BollywoodEnrollment);
router.post('/hollywood',BlogController.HollywoodEnrollment);
router.post('/technology',BlogController.TechnologyEnrollment);
router.post('/food',BlogController.FoodEnrollment);
router.post('/fitness',BlogController.FitnessEnrollment);

router.get('/home',BlogController.getHomeData);
router.get('/bollywood',BlogController.getBollywoodData);
router.get('/hollywood',BlogController.getHollywoodData);
router.get('/technology',BlogController.getTechnologyData);
router.get('/food',BlogController.getFoodData);
router.get('/fitness',BlogController.getFitnessData);

module.exports=router;