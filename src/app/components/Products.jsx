
"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductDetailsModal from './ProductDetailsModal';
import Loader from './Loader/Loader';

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
    }
    const HeroSection = () => {
        const [productImages, setProductImages] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const fetchedProducts = await getProducts();
              const images = fetchedProducts.map(product => product.image);
              setProductImages(images);
            } catch (error) {
              console.error("Error fetching products", error);
            }
          };
      
          fetchData();
        }, []);
      
        return (
          <section className="service-section bg-cover bg-center ">
            <div className="container mx-auto px-4 py-20 md:py-40 relative z-10">
              <div className="flex flex-col my-[20%] items-start justify-start gap-4 text-start
               bg-black bg-opacity-50 p-4 rounded-lg">
                <h1 className="text-3xl font-bold text-white md:text-5xl">
                  Welcome to FlowLaunch
                </h1>
                <p className="text-xl font-semibold text-gray-300 md:text-lg">
                  Discover our exclusive collection of products that are perfect for your everyday needs.
                </p>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-[50v] z-0">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={5000}
                className="h-full"
              >
                {productImages.map((image, index) => (
                  <div key={index} className="h-full">
                    <img src={image} alt={`Product ${index + 1}`} className="w-full h-[100vh]
                     border-2 border-white object-contain" />
                  </div>
                ))}
              </Carousel>
            </div>
          </section>
        );
      };


const Products = () => {
    const [productList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProductList(fetchedProducts);
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
        setFilteredProducts(
            productList.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, productList]);

    if (loading) {
        return <div>
            <Loader />
        </div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
        <HeroSection />
      
            <div className="  p-28 -my-[20%]">
                
                <h1 className='text-white text-4xl my-[12%] text-left'> Search your desired products here</h1>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-1/2 p-2  mb-4 border border-gray-300 rounded"
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
