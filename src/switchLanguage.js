import SiteContext, {useSite} from "./context/SiteContext"

export default function SwitchLanguage()
{
    const {language, setLanguage} = useSite()

    return(
        <>
            Mevcut dil = {language} <br/>
            <button style={{backgroundColor:'pink'}} onClick = {() => setLanguage(language == 'tr' ? 'en' : 'tr')}>Change Language</button>
        </>
    );
}