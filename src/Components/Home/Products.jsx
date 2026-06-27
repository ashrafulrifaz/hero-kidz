import React from 'react';
import products from '@/data/toys.json'
import ProductCard from '../Cards/ProductCard';

const Products = () => {
    return (
        <div className='py-10'>
            <h3 className='font-semibold text-2xl text-center mb-10'>Our Products</h3>
            <div className="grid grid-cols-4 gap-5">
                {
                    products.map((product, id) => (
                        <ProductCard key={id} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;