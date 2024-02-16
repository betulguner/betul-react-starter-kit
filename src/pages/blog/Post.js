import {useParams} from "react-router-dom";

export default function Post()
{
    const params = useParams()
    console.log(params)
    
    return(
        <div>
            Post Page 
        </div>
    )
}