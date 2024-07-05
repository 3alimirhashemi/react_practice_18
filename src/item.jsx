import { useContext } from "react"
import testcontext from "./context"

const Item = (props)=>{
    const context = useContext(testcontext)
    const handleDelete = (e)=>{
        context.setTime(context.time.filter(t=>t != e.target.innerHTML))

    }
    return(
        <div onClick={handleDelete}>
            {props.children}
        </div>
    )
}
export default Item