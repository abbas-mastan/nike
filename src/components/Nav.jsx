import { useState } from "react";
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from "../constants";

const Nav = () => {
    const [toggler, setToggler] = useState(false);
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/"><img src={headerLogo} alt="logo" width={130} height={29} /></a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='lg:hidden'>
                    <img className="cursor-pointer" onClick={() => setToggler(toggler ? false : true)} src={hamburger} alt="hamburger" width={25} height={25} />
                    <ul className={`${toggler ? 'flex' : 'hidden'} bg-white shadow-xl flex-col absolute top-20 mt-0 right-[60px] border-2 p-5 space-y-2`}>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a className="hover:text-blue-500" onClick={() => setToggler(toggler ? false : true)} href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav