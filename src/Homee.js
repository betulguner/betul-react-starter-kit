import Header1 from "./Header1";
import Footer from "./Footer";
import SwitchTheme from "./switchTheme";
import SwitchLanguage from "./switchLanguage";
import {useAuth} from './context/AuthContext';


export default function Homee({theme,setTheme, language, setLanguage}){
    
    const {user} = useAuth()

    return(
        <>
            <Header1/>
            App

            {user && (
                <div style= {{padding:10, border: '1px solid red'}}>
                    bu alan sadece giriş yapılınca görünür
                </div>
            )}
            <Footer/>
        </>
    )
}