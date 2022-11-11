import axios from "axios"
import Swal from "sweetalert2";

export const SendMail = async(data) => {
    try {
        let result = await axios.post(process.env.REACT_APP_API, data,
        {headers:{
            "Content-Type": "application/json",
        }});
        Swal.fire({
            icon: 'success',
            title: 'The message has been sent',
            text: 'We will be in touch'
        })
    } catch (error) {
        console.log('error in send mail', error)
        Swal.fire({
            icon: 'error',
            title: 'Oops... somthing went wrong',
            text: 'Please try again later'
        })
    }
}


