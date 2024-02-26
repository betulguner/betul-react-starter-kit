import { useSelector, useDispatch } from "react-redux"
import modals from "../modals";
import {closeModal} from "../stores/modal";

export default function Modal(){

    const {name,data } = useSelector(state => state.modal)
    const modal = modals.find(m => m.name == name )
    const dispatch = useDispatch()
    const close = () => {
        dispatch(closeModal())
    }

    console.log("name:", name);
    console.log("modal:", modal);
    console.log("modals:", modals);


    return(
        <div>
            {modal && <modal.element close={close} data={data}/>}
        </div>
    )
}