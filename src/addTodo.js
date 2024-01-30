import {memo} from "react"
function AddTodo({submitHandle, onChange, todo}){

    console.log('ADDTODO rendered')
    return(
        <form onSubmit = {submitHandle}>
        <input type="text" value={todo} onChange={onChange}/>
        <button disabled= {!todo} type="submit">Submit</button>
      </form>
    )
}
export default memo(AddTodo)