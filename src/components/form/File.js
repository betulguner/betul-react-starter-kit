import {useField} from "formik";

export default function File( {label, ...props}){

    const [field,meta, helpers] = useField(props)

    const changeHandle = e => {
        helpers.setValue(e.target.files[0])
    }

    return(
        <label>
            <div>{label}</div>
            <input type= "file" onChange={changeHandle} {...props}/>
        </label>
    )

}