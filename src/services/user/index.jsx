import axios from "axios"

export const fetchData=async()=>{
    const res=await axios.get('http://127.0.0.1:3001/userData')
    console.log(res); 
}