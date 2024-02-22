import { useAuth } from "../context/AuthContext2";
import {Navigate, useLocation} from "react-router-dom";

export default function PrivateRoute({children}){
    //kullanıcı otuurm açmış mı?
    //eğer oturum açmamışsa yönlendirme işlemi yap
    //eğer otuurm açmışsa children ı render/return et

    const {user} = useAuth()
    const location = useLocation()

    if(!user){
        return <Navigate to = "/auth/login" replace = {true} state = {{return_url: location.pathname}}/>
    }

    return children
}