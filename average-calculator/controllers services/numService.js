const axios =require('axios');
const window_size = 10;
let stored_num=[];
const fetchNumberFromServer =async(numberid)=>{
    const url=`http://20.244.56.144/test/${numberid}`;
    return response.data.number;
};

const calculateAverage =async(numberid)=>{
    const number = await fetchNumberFromServer(numberid);
    stored_num.push(number);
    if(stored_num.length>window_size){
        stored_num.shift();
    }
    const sum=stored_num.reduce((ac,cr)=> ac+cr,0);
    const avg=sum/stored_num.length;
    return {average,stored_num};
};
module.exports={calculateAverage};