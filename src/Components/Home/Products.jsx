import React from 'react';
import products from '@/data/toys.json'
import ProductCard from '../Cards/ProductCard';
import { getProduct } from '@/actions/server/product';

const Products = async () => {
    const product = await getProduct()
    
    return (
        <div className='py-10'>
            <h3 className='font-semibold text-2xl text-center mb-10'>Our Products</h3>
            <div className="grid grid-cols-4 gap-5">
                {
                    product.map((product, id) => (
                        <ProductCard key={id} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;