import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { BsCart } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="nav">
            <Logo />
            <ul className='flex items-center gap-5'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
            <div className="flex gap-3 items-center">
                <Link href={'/cart'} className="py-2.5 px-3 rounded-md text-white bg-orange-500">
                    <BsCart />
                </Link>
                <Link href={'/login'} className="py-1.5 px-3 rounded-md border border-orange-400 text-orange-600">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;