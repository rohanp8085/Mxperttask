import axios from "axios"

 



 const API_URL = "/api"

const FetchuserData = async() =>{
   const response = await axios.get(API_URL + "/sciencefiction")
   return response.data
}

const singleData = async(id)=>{
    const response = await axios.get(API_URL + "/sciencefiction" +"/" + id)
    return response.data
}

const AuthService = {
    FetchuserData,
    singleData
}
 export default AuthService