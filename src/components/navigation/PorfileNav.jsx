import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
const ProfileNav = ({config}) =>{
    return(
        <div className=" flex justify-between items-center w-full py-2">
        <div className="flex justify-center items-center space-x-2">
          <div>
            <img className="rounded-full w-8" src="https://ui-avatars.com/api/?name=Test+User" alt="avatar" />
          </div>
          <div className="flex justify-start flex-col items-start">
            <p className="cursor-pointer text-sm leading-5 text-white">{config.name}</p>
            <p className="cursor-pointer text-xs leading-3 text-gray-300">{config.email}</p>
          </div>
        </div>
        <FontAwesomeIcon className="cursor-pointer text-white" icon={faGear}/>
      </div>
    )
}

export default ProfileNav 