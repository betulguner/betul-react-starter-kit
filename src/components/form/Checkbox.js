import {useField} from "formik";
import { FiCheck } from "react-icons/fi";

export default function Checkbox( {label, ...props}){

    const [field,meta, helpers] = useField(props)

    return(
        <label>
            <button onClick={ () => helpers.setValue(!field.value)} >
                <FiCheck/> 
            </button>
            {label}
        </label>
    )

}