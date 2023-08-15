import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BurguerButton = ({show, setShow}) =>{
    return(
        <button onClick={()=>setShow(!show)} className={`focus:outline-none focus:ring-2 text-white text-2xl`}>
            {show ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}            
        </button>
    )
}

export default BurguerButton;