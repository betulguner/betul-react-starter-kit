import TodoItem from "./item";
import { useSelector } from "react-redux";

export default function TodoList({ setModal, user}){

    const { todos } = useSelector(state => state.todo)

    return(
        <ul>
            {todos.map((todo, key) => <TodoItem key={key} setModal={setModal} user={user} todo={todo} />)}
        </ul>
    )
}