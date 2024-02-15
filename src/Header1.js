import SwitchTheme from "./switchTheme"
import SwitchLanguage from "./switchLanguage"
import {useAuth} from './context/AuthContext'

export default function Header1(){

    const {user, setUser} = useAuth()

    const login = () => {
        setUser({
            name: 'duhan',
            id: 3
        })
    }

    const logout = () => {
        setUser(false)
    }

    return(
        <header>
            HEADER<br/>
            {user && <button onClick={logout} >Çıkış Yap</button> || <button onClick = {login} >Giriş Yap</button>}
            <hr/>
            <SwitchTheme /> <br/>
            <SwitchLanguage />
        </header>
    )
}