import Item from "./item"

const Timerlist = (props)=>{
    return(
        <div className="main_title_hour">
            {props.children.map((c)=>(
            <Item>{c}</Item>   
            ))}
        </div>
    )
}
export default Timerlist