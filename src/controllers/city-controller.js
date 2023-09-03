const {CityService}=require("../services/index");

const cityService=new CityService();

// POST /city
const create= async (req,res)=>{
    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created city',
            err:{}
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            data:{},
            status:false,
            message:'Something is incorrect',
            err:error
        })
    }
}

// DELETE /city/:id
const destroy= async (req,res)=>{
    try{
        const response=await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully deleted the city',
            err:{}
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            data:{},
            status:false,
            message:'Not able to delete the city',
            error:error,
        })
    }
}

//GET /city/:id
const get= async (req,res)=>{
    try{
        const response=await cityService.getCity(req.params.id);
        return res.status(201).json({
            data:response,
            status:true,
            message:'Your requested city has been fetched',
            error:{}
        })
    }catch(error){
        console.log(error);
        return res.status(404).json({
            data:{},
            status:false,
            message:'Not able to fetch the data',
            error:error
        })
    }
}

// PATCH /city/:id -> req.body
const update= async (req,res)=>{
    try{
        const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:response,
            status:true,
            message:'Your table has been updated',
            error:{}
        })
    }catch(error){
        console.log(error);
        return res.status(404).json({
            data:{},
            status:false,
            message:'Not able to update the data',
            error:error
        })
    }
}


module.exports={
    create,
    destroy,
    get,
    update
}