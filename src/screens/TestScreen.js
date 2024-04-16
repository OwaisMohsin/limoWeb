import React from "react";

import fb from '../assets/icons/fb.png'
import insta from '../assets/icons/insta.png'
import linkedin from '../assets/icons/linkedin.png'
import twiter from '../assets/icons/twiter.png'
import inStock from '../assets/icons/inStock.png'
import paypal from '../assets/icons/paypal.png'
import truckShip from '../assets/icons/truckShip.png'


const ProductDetailPage = () => {
    const socialIcons = [
        fb, insta, linkedin, twiter
    ]

    const category = new Array(3).fill(0)
    const memorySize = new Array(4).fill(0)
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
                {/* First Section: Product Images */}
                <div className="lg:col-span-3">

                    <div className="mb-4">
                        <img
                            src={"https://static-01.daraz.pk/p/643e97248bd6d5d20d2526436e73f186.jpg_750x750.jpg_.webp"}
                            alt="Big Product"
                            className="w-full"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <img
                            src={"https://static-01.daraz.pk/p/643e97248bd6d5d20d2526436e73f186.jpg_750x750.jpg_.webp"}
                            alt="Small Product 1"
                            className="w-full cursor-pointer"
                        />
                        <img
                            src={"https://static-01.daraz.pk/p/643e97248bd6d5d20d2526436e73f186.jpg_750x750.jpg_.webp"}
                            alt="Small Product 2"
                            className="w-full cursor-pointer"
                        />
                        <img
                            src={"https://static-01.daraz.pk/p/643e97248bd6d5d20d2526436e73f186.jpg_750x750.jpg_.webp"}
                            alt="Small Product 3"
                            className="w-full cursor-pointer"
                        />
                    </div>
                </div>

                {/* Second Section: Product Heading and Description */}
                <div className="lg:col-span-4">
                    <h2 className="text-2xl font-semibold mb-4">ST4000NM0023 - Seagate 4TB 7200RPM
                        SAS 6Gb/s 128MB 3.5-Inch </h2>
                    <h4 className="text-xl font-semibold mb-4">$569.00 - $609.00</h4>
                    <ul className="list-disc border-b-2 mb-4 pl-16 pb-4">
                        <li className="text-sm text-black" > Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                        <li className="text-sm text-black" >DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                        <li className="text-sm text-black" > Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                    </ul>

                    <div>
                        <span className="font-semibold text-black" >CATEGORY:  </span>
                        <span className="text-sm text-gray-400"> Category 1</span>
                    </div>
                    <div className="flex mt-2" >
                        {
                            category.map((item, index) => {
                                return (
                                    <div className="border border-gray-300 p-4 flex items-center mr-4 rounded-xl">
                                        {/* Image on the left */}
                                        <div className="mr-4">
                                            <img
                                                src={"https://static-01.daraz.pk/p/643e97248bd6d5d20d2526436e73f186.jpg_750x750.jpg_.webp"}
                                                alt="Icon"
                                                className="h-10 w-6 object-cover"
                                            />
                                        </div>

                                        {/* Text and description on the right */}
                                        <div>
                                            <p className="text-gray-600">Category {index + 1}</p>
                                            <h3 className="text-lg font-bold">$569.00</h3>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className="mt-2" >
                        <span className="font-semibold text-black" >MEMORY SIZE:  </span>
                        <span className="text-sm text-gray-400"> 128GB</span>
                    </div>
                    <div className="flex my-2" >
                        {
                            category.map((item, index) => {
                                return (
                                    <div className="border border-gray-300 px-4 py-2 flex items-center mr-4 rounded-xl">
                                        <span className="text-sm text-gray-400"> 128GB</span>

                                    </div>

                                )
                            })
                        }
                    </div>




                    <div>
                        <span className="font-semibold text-black" >SKU:  </span>
                        <span className="text-sm text-gray-400"> ABC025168</span>
                    </div>

                    <div>
                        <span className="font-semibold text-black" >CATEGORY:  </span>
                        <span className="text-sm text-gray-400"> Hard drive & storage</span>
                    </div>

                    <div>
                        <span className="font-semibold text-black" >BRAND:  </span>
                        <span className="text-sm text-gray-400"> Dell</span>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                        {
                            socialIcons.map((item) => {
                                return (
                                    <div className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full">
                                        <img
                                            src={item}
                                            alt="Image 1"
                                            className="h-4 w-4 object-cover rounded-full"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>

                {/* Third Section: Total Price and Add to Cart Button */}
                <div className="lg:col-span-2">
                    <div className="bg-slate-200 px-4 py-4 rounded-lg" >
                        <p className="text-xs text-gray-500" >TOTAL PRICE:</p>
                        <p className="text-xl font-bold" >$609.00</p>
                        <div className="flex items-center mt-4 " >
                            <img className="h-3 w-3" src={inStock} />
                            <span className="text-xs ml-2" >In Stock</span>
                        </div>

                        <div className="flex items-center justify-between bg-white rounded-md mt-4 px-2 py-2" >
                            <span className="text-xl font-bold ml-2" >-</span>
                            <span className="text-xl font-bold" >1</span>
                            <span className="text-xl font-bold ml-2" >+</span>
                        </div>
                        <div className="flex items-center justify-center bg-black rounded-md mt-4 px-2 py-3" >

                            <span className="text-xs text-white" >ADD TO CART</span>

                        </div>
                        <div className="flex items-center justify-center bg-gray-300 rounded-md mt-4 px-2" >

                            <span className="text-xs text-black font-semibold" >BUY WITH</span>
                            <img className="w-10 ml-2" src={paypal} />

                        </div>
                        <p className="text-xs mt-4" >Guaranteed Safe Checkout</p>
                    </div>
                    <div className="bg-slate-200 px-4 py-4 rounded-lg mt-2" >
                        <div className="flex items-center justify-center bg-gray-800 rounded-md mt-4 px-2 py-3" >

                            <span className="text-xs text-white" >Quick Order 24/7</span>

                        </div>
                        <p className="font-bold mt-4" >(025) 3886 25 16</p>
                    </div>

                    <div className="mt-4 flex items-center" >
                        <img className="h-4 w-5" src={truckShip} />
                        <span className="ml-2 text-gray-500 text-sm" >Ships from </span>
                        <span className="text-black font-bold text-sm ml-1" > United States</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
