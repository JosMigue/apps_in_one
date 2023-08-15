import { useState } from "react";
import NavItem from "./NavItem";
import NavItemContent from "./NavItemContent";
import ProfileNav from "./PorfileNav";
import { faUsers, faGauge, faMessage, faKey, faLock, faSliders, faBell, faBullseye, faEnvelopeOpenText, faRightFromBracket, faMoneyCheck, faCloud, faNetworkWired, faListCheck, faQrcode, faEarthAmericas} from "@fortawesome/free-solid-svg-icons";
import BurguerButton from "./BurguerButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () =>{
  let menuArray = [true, false, false];
  const [menu, setMenu] = useState(menuArray);
  const [show, setShow] = useState(false);

  const setMenuValue = (props) => {
      let newArr = [...menu];
      newArr[props] = !newArr[props];
      setMenu(newArr);
  }
  const navSectionClasses = 'flex flex-col justify-start justify-self-start items-self-start items-center px-6 border-b border-gray-600 w-full';
  return(
    <div>
      <div className="rounded-r bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
        <div className="flex justify-between  items-center space-x-3">
            <FontAwesomeIcon className="text-white text-3xl"icon={faEarthAmericas}/>
            <p className="text-2xl leading-6 text-white">TestCompany</p>
        </div>
        <div aria-label="toggler" className="flex justify-center items-center">
          <BurguerButton setShow={setShow} show={show}/>
        </div>
      </div>
      <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'}  xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex  xl:min-h-screen min-h-full w-full sm:w-64 bg-gray-900 flex-col`}>
        <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
          <FontAwesomeIcon className="text-white text-3xl"icon={faEarthAmericas}/>
          <p className="text-2xl leading-6 text-white">TestCompany</p>
        </div>
        <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <NavItem title="Dashboard" variant="simple" icon={faGauge}/>
          <NavItem title="Users" variant="simple" icon={faUsers}/>
        </div>
        <div className="flex flex-col">
          <div className={navSectionClasses}>
            <NavItem title="Apps overview" show={menu[0]} setMenuValue={setMenuValue} menuPosition={0}  variant="grouped"/>
            <div id="menu1" className={`${menu[0] ? 'flex' : 'hidden'} justify-start flex-col w-full md:w-auto items-start pb-1 `}>
              <NavItemContent title="Taks" icon={faListCheck}/>
              <NavItemContent title="Messages" icon={faMessage}/>
              <NavItemContent title="QR Code" icon={faQrcode}/>
              <NavItemContent title="Password generator" icon={faLock}/>
              <NavItemContent title="Goals" icon={faBullseye}/>
            </div>
          </div>
          <div className={navSectionClasses}>
            <NavItem title="Vendors" show={menu[1]} setMenuValue={setMenuValue} menuPosition={1} variant="grouped"/>
            <div className={`${menu[1] ? 'flex' : 'hidden'} justify-start flex-col w-full md:w-auto items-start pb-1 `}>
              <NavItemContent title="Messages" icon={faMessage}/>
              <NavItemContent title="Security" icon={faKey}/>
              <NavItemContent title="Settings" icon={faSliders}/>
              <NavItemContent title="Notifications" icon={faBell}/>
              <NavItemContent title="Passwords" icon={faLock}/>
              <NavItemContent title="Goals" icon={faBullseye}/>
            </div>
          </div>
          <div className={navSectionClasses}>
            <NavItem title="Services" show={menu[2]} setMenuValue={setMenuValue} menuPosition={2} variant="grouped"/>
            <div className={`${menu[2] ? 'flex' : 'hidden'} justify-start flex-col w-full md:w-auto items-start pb-1 `}>
              <NavItemContent title="Authentication" icon={faRightFromBracket}/>
              <NavItemContent title="Payment Services" icon={faMoneyCheck}/>
              <NavItemContent title="CDN Services" icon={faCloud}/>
              <NavItemContent title="API Services" icon={faNetworkWired}/>
              <NavItemContent title="Email Services" icon={faEnvelopeOpenText}/>
              <NavItemContent title="Goals" icon={faBullseye}/>
            </div>
          </div>
          <div className={`flex flex-col  justify-center self-end items-center px-6 border-b border-gray-600 w-full`}>
            <ProfileNav config={{name:'Test User', email: 'text@company.com'}}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Nav;