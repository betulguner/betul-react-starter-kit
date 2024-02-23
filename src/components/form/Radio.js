import {useField} from "formik";
import { FiCheck } from "react-icons/fi";

export default function Radio( {label,options, ...props}){

    const [field,meta, helpers] = useField(props)

    return <div>
        {options.map((option,key) => (
        <label>
            <button onClick={() => helpers.setValue(option.key)}>
                <option/> 
            </button>
            {option.value}
        </label>
    ))}
    </div>

}