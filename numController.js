const numService =require ("./numService");
exports.getNumberAverage = async(req,res)=>{
    try{
        const{numberid}=req.params;
        const answer = await numService.calculateAverage(numberid);
        res.status(200).json(answer);
    }catch(error){
        res.status(500).json({error:error.message});
    }
    };
