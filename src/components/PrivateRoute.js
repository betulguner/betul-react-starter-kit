import { useAuth } from "../context/AuthContext";
import {Navigate} from "react-router-dom";

export default function PrivateRoute({children}){
    //kullanıcı otuurm açmış mı?
    //eğer oturum açmamışsa yönlendirme işlemi yap
    //eğer otuurm açmışsa children ı render/return et

    const {user} = useAuth()

    if(!user){
        return <Navigate to = "/auth/login"/>
    }

    return children
}