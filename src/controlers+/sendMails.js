import axios from "axios"

export const SendMail = async(data) => {
    let result = await axios.post(process.env.REACT_APP_API, data,
    {headers:{
        "Content-Type": "application/json",
    }});
}


