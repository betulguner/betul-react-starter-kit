import SiteContext, {useSite} from "./context/SiteContext"
export default function SwitchTheme()
{
    const {theme, setTheme} = useSite()

    return(
        <>
            Mevcut tema = {theme} <br/>
            <button style={{backgroundColor:'pink'}} onClick = {() => setTheme(theme == 'light' ? 'dark' : 'light')}>Change theme</button>
        </>
    )
}
