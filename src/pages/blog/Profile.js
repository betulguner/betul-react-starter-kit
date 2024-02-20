import { useAuth } from "../../context/AuthContext2";

export default function Profile(){
    const {setUser} = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }

    return(
        <div>
            Profile page <br/>
            <button onClick={logoutHandle}>log out</button>
        </div>
    )
}