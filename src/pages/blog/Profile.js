import { useAuth } from "../../context/AuthContext2";
import { Helmet } from "react-helmet";

export default function Profile(){

    const {setUser} = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }

    return(
        <div>
            <Helmet>
                <title>Profil</title>
            </Helmet>
            Profile page <br/>
            <button onClick={logoutHandle}>Çıkış</button>
        </div>
    )
}