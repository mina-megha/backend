import { Request,Response } from "express"
import { Users } from "../models/user.model"
import { pagination } from "../utils/pagination";
import { BadRequest, Ok } from "../response/http.response";
export  const register = async(request:Request,response:Response)=>{

    try {

        const body = request.body
console.log(body);

        let obj ={
            name:body.name,
            lastname:body.lastname,
            dob:body.dob,
            address:body.address
        }
      const data =  await Users.create(obj)

        let res ={
            status:true,
            code:200,
            message:"Success",
            data:data
        }
        
        response.send(res)
        
    } catch (error) {
        console.log(error);
        
        let res ={
            status:false,
            code:400,
            message:"error",
            data:error
        }  
        response.send(res)
        
    }
}

export  const list = async(request:Request,response:Response)=>{

    try {

        const body = request.body
        
        const page = Number(body.page) ||1
        const limit = Number(body.limit) ||10


      const data =  await Users.findAndCountAll()



let pag :any= await pagination(limit,page ,data.count)


console.log("pag",pag);


const respe  = {
    ...pag,
    data:data.rows
}
console.log("respe",respe);



        let res ={
            status:true,
            code:200,
            message:"Success",
            data:response
        }
        
        Ok(response,"Data get successfully",{data:respe})  
    } catch (error) {
        console.log(error);
        
        let res ={
            status:false,
            code:400,
            message:"error",
            data:error
        }  
        response.send(res)
        
    }
}