import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-3'>
            <Image src={'/assets/logo.png'} alt='logo' width={40} height={40} />
            <h3 className='font-semibold'>Hero Kidz</h3>
        </Link>
    );
};

export default Logo;