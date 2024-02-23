import {useField} from "formik";

export default function Select( {label,options, ...props}){

    const [field,meta, helpers] = useField(props)

    return(
        <label>
            <div>{label}</div>
            <select {...field} {...props}>
                {options.map((option,key) => (
                    <option value={option.key} key={key}>{option.value}</option>
                ))}
            </select>
        </label>
    )

}