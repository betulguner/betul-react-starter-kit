import { useAuth } from "../../context/AuthContext2";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Login(){
    
    const navigate = useNavigate()
    const location = useLocation()
    const {setUser} = useAuth()

    console.log(location)

    const loginHandle = () => {
        setUser({
            id:1,
            userName: 'duhanaktan'
        })
        navigate(location?.state?.return_url || '/' , {
            replace: true,
            state:{
                name:'betül'
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            Login Page <br/>
            <button onClick={loginHandle}>Giriş yap</button>
        </div>
    )
}