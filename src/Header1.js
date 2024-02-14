import SwitchTheme from "./switchTheme"
import SwitchLanguage from "./switchLanguage"

export default function Header1(){
    return(
        <header>
            HEADER<br/>
            <SwitchTheme /> <br/>
            <SwitchLanguage />
        </header>
    )
}