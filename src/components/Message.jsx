import style from "./Message.module.css"
export function Message(props){

return ( 
 <>
 <h1 className={style.header_h1}> {props.title}</h1>
 <h2>{props.id}</h2>
 </>
)
}