const express= require("express");
const app=express();
const numController =require("./average-calculator/controllers services/numController");
app.use(express.json());
app.get("/number/:numberid", numController.getNumberAverage);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
});