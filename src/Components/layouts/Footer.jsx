import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-gray-50 px-20 py-10 grid grid-cols-4 gap-10">
            <div className="col-span-2">
                <Logo />
            </div>
            <div>
                <h3 className='font-medium text-lg'>Company</h3>
                <ul className='mt-5 space-y-1'>
                    <li>
                        <Link href="/about" className='hover:underline'>About Us</Link>
                    </li>
                    <li>
                        <Link href="/contact" className='hover:underline'>Contact</Link>
                    </li>
                    <li>
                        <Link href="/services" className='hover:underline'>Services</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='font-medium text-lg'>Legal</h3>
                <ul className='mt-5 space-y-1'>
                    <li>
                        <Link href="/terms-of-use" className='hover:underline'>Terms of use</Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy" className='hover:underline'>Privacy policy</Link>
                    </li>
                    <li>
                        <Link href="/cookies-policy" className='hover:underline'>Cookies Policy</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;