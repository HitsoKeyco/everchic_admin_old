import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate()
    const apiUrl = import.meta.env.VITE_API_URL    

    const createUser = (data) => {
        const { email, firstName, lastName, password} = data
        const url = `${apiUrl}/users`
        axios.post(url, { email, firstName, lastName, password})
            .then(res => {                
                
            })
            .catch(err => console.log(err))
            
    }

    const loginUser = (data) => {        
        axios.post(`${apiUrl}/admin/login`, data)
            .then(res => {                
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.admin))                
                navigate("/home");
            })
            .catch(err => {                
                console.log(err)
            })
    }

    return { createUser, loginUser }
}

export default useAuth