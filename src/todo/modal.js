export default function Modal({close,name,data}){
    return(
        <div>
            Modal içeriği <br/>
            <button onClick={close}>Modal'ı Kapat</button>
        </div>
    )
}