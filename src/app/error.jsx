'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center gap-10'>
            <Image src={'/assets/error.jpg'} alt='error image' width={500} height={200} className='w-fit rounded-2xl' />
            <div>
                <Link href={'/'} className='py-1.5 px-3 rounded-md border border-orange-400 text-orange-600'>Back to Home</Link>
            </div>
        </div>
    );
};

export default notFound;