import { useAuth } from "../../context/AuthContext2";
import { useNavigate } from "react-router-dom";

export default function Login(){
    
    const navigate = useNavigate()
    const {setUser} = useAuth()

    const loginHandle = () => {
        setUser({
            id:1,
            userName: 'duhanaktan'
        })
        navigate('/')
    }

    return (
        <div>
            Login Page <br/>
            <button onClick={loginHandle}>Giriş yap</button>
        </div>
    )
}