import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavItemContent = ({title, icon}) =>{
  return(
    <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
      <FontAwesomeIcon  icon={icon}/>
      <p className="text-base leading-2  ">{title}</p>
    </button>
  )
}

export default NavItemContent;