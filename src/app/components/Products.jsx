"use client"
import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import ProductCard from './ProductCard';
import ProductDetailsModal from './ProductDetailsModal';
import 'tailwindcss/tailwind.css';

const getProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { cache: "no-store" });
        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
        const products = await res.json();
        return products; // Directly returning the array of products
    } catch (error) {
        console.log("Error loading products", error);
    }
};

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
                setFilteredProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    if (loading) {
        return <div><Loader /></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
        <div className="container mx-auto p-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl text-white font-bold">Welcome to FlowLaunch</h1>
            <p className="text-gray-600 mt-2">Discover our exclusive collection of products that are perfect for your everyday needs. Explore and enjoy our unique offerings crafted just for you.</p>
          </div>
          
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 p-2 mb-4 border border-gray-300 rounded"
          />
      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
            ))}
          </div>
        </div>
        
        {selectedProduct && (
          <ProductDetailsModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </>
      
    );
};

export default Products;
