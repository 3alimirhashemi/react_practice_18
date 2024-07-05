import { useContext } from "react"
import Item from "./item"
import { testcontext } from "./context"

const Timerlist = (props)=>{
    const context = useContext(testcontext)
    return(
        <div className="main_title_hour">
            {context.time.map((c)=>(
            <Item key={Math.random()}>{c}</Item>   
            ))}
        </div>
    )
}
export default Timerlist