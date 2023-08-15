import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavItem = ({title, show, setMenuValue, menuPosition, variant, icon}) => {
  function GroupedItem(){
    return(
      <button onClick={()=>setMenuValue(menuPosition)} className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  ">
        <p className="text-sm leading-5  uppercase">{title}</p>
        <svg id="icon1" className={`${show ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    );
  }

  function SimpleItem(){
    return(
      <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
        <FontAwesomeIcon  icon={icon}/>
          <p className="text-base leading-4 ">{title}</p>
      </button>
    )
  }
  
  return variant == 'simple' ? <SimpleItem/> : <GroupedItem/> 
}

export default NavItem;