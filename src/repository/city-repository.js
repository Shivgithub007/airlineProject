const {City}=require("../models/index.js");// It wil use the file under models named index.js which have stored all the models created by us.
// console.log(City); It is going to print the city

class cityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }catch(error){
            throw{error};
        }
    }
        
   
    async deleteCity(cityid){
        try{
            await City.destroy({
                where:{
                    id:cityid,
                }
            })
        }catch(error){
            throw{error};
        }
    }
}

module.exports=cityRepository