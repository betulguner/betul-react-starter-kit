import {useField} from "formik";

export default function Textarea( {label, ...props}){

    const [field,meta, helpers] = useField(props)

    return(
        <label>
            <div>{label}</div>
            <textarea {...field} {...props}/>
        </label>
    )

}