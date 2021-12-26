import { useState } from "react";
import { MdNotifications, MdRemoveRedEye, MdPerson, MdClear } from "react-icons/md";
import { NavbarLink } from "./NavbarLink";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarSearch } from "./NavbarSearch";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='fixed top-0 z-50 bg-white w-full flex flex-row items-center flex-wrap justify-between'>
      <div className='flex'>
        <div className="m-auto ml-5 lg:ml-0 block lg:hidden">
          <button 
          onClick={() => setOpen(true)}
          className="flex items-center px-3 py-2 border rounded text-amber-200 border-amber-400 hover:text-amber-500 hover:border-amber-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <aside className={`transform ${open ? 'translate-x-0' : '-translate-x-full'} top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}>
          <div className="flex justify-between px-4">
             <NavbarLogo />
            <MdClear onClick={() => setOpen(false)} className="text-lg my-auto cursor-pointer" />
          </div>
          <NavbarSearch className="w-44 flex" />
          <ul>
            <li>
              <NavbarLink textSize="sm" name="Movies" />
            </li>
            <li>
              <NavbarLink textSize="sm" name="TV" />
            </li>
            <li>
              <NavbarLink textSize="sm" name="Celebs" />
            </li>
          </ul>
        </aside>
        <NavbarLogo className="px-8 md:px-12 py-4" />
        <div className='m-auto hidden lg:block'>
          <NavbarLink name="Movies" />
          <NavbarLink name="TV" />
          <NavbarLink name="Celebs" />
        </div>
        <NavbarSearch className="w-80 hidden lg:flex" />
      </div>
      <div>
        <div className='m-auto mr-5 hidden lg:block'>
          <NavbarLink>
            <MdNotifications />
          </NavbarLink>
          <NavbarLink>
            <MdRemoveRedEye />
          </NavbarLink>
          <NavbarLink>
            <MdPerson />
          </NavbarLink>
          <span className="font-medium">Mathieu</span>
        </div>
      </div>
    </nav>
  )
}