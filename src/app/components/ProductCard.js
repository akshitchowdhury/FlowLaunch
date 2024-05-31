// components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onClick }) => {
    return (
        <div
  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
   border border-gray-200 transition-transform transform hover:scale-110"
  onClick={() => onClick(product)}
>
  <div className="relative">
    <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
    <div className="absolute inset-0 bg-white bg-opacity-75 opacity-0 hover:h-40 
    transition-opacity duration-300 flex flex-col justify-center items-center p-4">
      
      {/* <p className="text-gray-600 mt-2">{product.description}</p> */}
    </div>
  </div>
  <div className="p-4">
  <h2 className="text-base  font-semibold">{product.title}</h2>
    <p className="text-gray-600">${product.price}</p>
  </div>
</div>
    );
};
export default ProductCard;
