import { banglaFont } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center justify-between gap-10 min-h-[80vh]'>
            <div className='space-y-5'>
                <h2 className={`${banglaFont.className} text-6xl font-bold leading-snug`}>আপনার সন্তানকে দিন একটি <span className='text-primary'>সুন্দর ভবিষ্যৎ</span></h2>
                <h3 className='text-lg font-medium'>Buy every toy with up to 15% discount</h3>
                <button className='py-1.5 px-3 rounded-md border border-orange-400 text-orange-600'>Explore Products</button>
            </div>
            <Image src={'/assets/hero.png'} alt='hero image' width={500} height={200} className='w-full' />
        </div>
    );
};

export default Banner;