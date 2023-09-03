const {City}=require("../models/index.js");// model ke index.js ke andar sare models ka access hai.
                                           // uske andar orm code likha hua hai which is used to get access of the models and create the rows inside  the model namded city



// This class is accessing the City mode.
class cityRepository{
    // This method is creating the rows into the city model.
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }catch(error){
            console.log('Error form teh create city');
            throw{error};
        }
    }
        
   // This method is deleting the rows from the city db
    async deleteCity(cityid){
        try{
            await City.destroy({
                where:{
                    id:cityid,
                }
            });
            return true;
        }catch(error){
            console.log("Error form the delete city");
            throw{error};
        }
    }


    async updateCity(cityid,data){
        try{
            // Below commented code also works but didnt return an empty object
            // const updatedCity=await City.update(data,{
            //     where:{
            //         id:cityid
            //     }
            // })
            // return updatedCity;

            // To get the updated data to we use the below approach
            const city=await City.findByPk(cityid);
            city.name=data.name;
            await city.save();
            return city;
            console.log(data,cityid)
        }
        catch(error){
            console.log("Error form the update city");
            throw{error}
        }
    }

    async getCity(cityid){
        try{
            const cityValue=await City.findByPk(cityid);
            return cityValue;
        }catch(error){
            console.log("Error form the get city");
            throw{error};
        }
    }
}

module.exports=cityRepository