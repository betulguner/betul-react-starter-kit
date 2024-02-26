import { useState } from "react";
import { editTodo } from "../stores/todo";
import { useDispatch } from "react-redux";

export default function EditTodo({data,close}){


    const dispatch = useDispatch()
    const [todo, setTodo] = useState(data.title)
    const [done,setDone] = useState(data.done)

    const submitHandle = e => {
        e.preventDefault()
        dispatch(editTodo({
            id:data.id,
            title:todo,
            done
        }))
        close()
    }
    return(
        <div>
            edit todo modalı
            <button onClick={() => close()}>Kapat</button>
        </div>
    )
}