import { useEffect, useState } from "react"

export default function Test()
{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('componenet ilk yüklendiğinde çalışır') //doğum
        return () => {
            console.log('component is destroyed') //ölüm
        }
    }, [])

    useEffect(() => {
        console.log('count değeri değişti',count)
    }, [count])

    useEffect(() => {
        console.log('componenet render oldu') //güncelleme,büyüme
    })

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count => count + 1)}> Arttır</button>
            <hr/>
            Test component
        </div>
    )
}