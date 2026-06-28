import Image from "next/image";
import Link from "next/link";
import { getProduct, singleProducts } from "@/actions/server/product";
import ProductCard from "@/Components/Cards/ProductCard";

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await singleProducts(id);
    const allProducts = await getProduct();
    const similarProducts = allProducts
        .filter((p) => p._id.toString() !== id)
        .slice(0, 4);

    if (!product || !product._id) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Product not found.</p>
            </div>
        );
    }

    const discountedPrice = Math.round(
        product.price - (product.price * product.discount) / 100
    );

    return (
        <div className="px-20 py-10">

            {/* Product Details */}
            <div className="w-full grid grid-cols-2 gap-12 mb-16">

                {/* Image */}
                <div className="relative bg-[#f5f0e8] rounded-2xl overflow-hidden h-[460px]">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-6"
                    />
                    {product.discount > 0 && (
                        <span className="absolute top-4 left-4 bg-[#D85A30] text-white text-xs font-medium px-3 py-1 rounded-full">
                            {product.discount}% OFF
                        </span>
                    )}
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                    <span className="inline-block bg-[#E1F5EE] text-[#0F6E56] text-xs px-3 py-1 rounded-full mb-3 w-fit">
                        Educational toy
                    </span>

                    <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                        {product.title}
                    </h1>
                    <p className="text-sm text-gray-400 mb-4">{product.bangla}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-amber-400 text-sm">
                            {"★".repeat(Math.floor(product.ratings))}
                            {"☆".repeat(5 - Math.floor(product.ratings))}
                        </div>
                        <span className="text-sm text-gray-500">
                            {product.ratings} · {product.reviews} reviews · {product.sold} sold
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-3xl font-semibold text-gray-900">
                            ৳{discountedPrice.toLocaleString()}
                        </span>
                        {product.discount > 0 && (
                            <span className="text-base text-gray-400 line-through">
                                ৳{product.price.toLocaleString()}
                            </span>
                        )}
                    </div>

                    {/* Info bullets */}
                    <ul className="flex flex-col gap-2 mb-6">
                        {product.info?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#1D9E75] flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button className="flex-1 bg-[#D85A30] hover:bg-[#c24f28] text-white text-sm font-medium py-3 rounded-xl transition-colors cursor-pointer">
                            Add to cart
                        </button>
                        <button className="flex-1 border border-gray-200 hover:border-[#D85A30] hover:text-[#D85A30] text-gray-600 text-sm font-medium py-3 rounded-xl transition-colors cursor-pointer">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mb-16">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
                <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    {product.description}
                </div>
            </div>

            {/* Q&A */}
            {product.qna?.length > 0 && (
                <div className="mb-16">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Common questions
                    </h2>
                    <div className="flex flex-col gap-3">
                        {product.qna.map((item, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl p-5">
                                <p className="text-sm font-medium text-gray-900 mb-1">
                                    {item.question}
                                </p>
                                <p className="text-sm text-gray-500">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Similar Products */}
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Similar products
                </h2>
                <div className="grid grid-cols-4 gap-5">
                    {similarProducts.map((p) => (
                        <ProductCard key={p._id.toString()} product={p} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;