import Image from "next/image";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    reviews,
    sold,
    ratings,
    info,
  } = product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden max-w-[300px] w-full">
      <div className="relative bg-[#f5f0e8] h-[220px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-[#D85A30] text-white text-[11px] font-medium px-2 py-1 rounded-full">
          {discount}% OFF
        </span>
        <span className="absolute top-3 right-3 bg-white border border-gray-200 text-gray-500 text-[11px] px-2 py-1 rounded-full flex items-center gap-1">
          <FiShoppingBag size={11} />
          {sold} sold
        </span>
      </div>

      <div className="p-4">
        <span className="inline-block bg-[#E1F5EE] text-[#0F6E56] text-[11px] px-2 py-1 rounded-full mb-2">
          Educational toy
        </span>

        <h3 className="text-sm font-medium text-gray-900 leading-snug mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mb-3">{bangla}</p>

        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4].map((i) => (
            <AiFillStar key={i} size={14} className="text-amber-400" />
          ))}
          <AiOutlineStar size={14} className="text-amber-400" />
          <span className="text-xs text-gray-500 ml-1">
            {ratings} · {reviews} reviews
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-medium text-gray-900">
            ৳{discountedPrice.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ৳{price.toLocaleString()}
          </span>
        </div>

        <ul className="flex flex-col gap-1 mb-4">
          {info.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
              <span className="mt-[5px] w-[5px] h-[5px] rounded-full bg-[#1D9E75] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <button className="flex-1 bg-[#D85A30] hover:bg-[#c24f28] text-white text-sm font-medium py-2 rounded-lg transition-colors">
            Add to cart
          </button>
          <Link href={`/products/${product._id}`} className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:text-[#D85A30] hover:border-[#D85A30] text-sm font-medium py-2 transition-colors">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;