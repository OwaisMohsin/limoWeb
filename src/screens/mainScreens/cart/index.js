import React from 'react';
import { Layout, Flex } from 'antd';
import webBanner from '../../../assets/icons/webBanner.png';
import MainHeader from '../../../components/header';

import hp from '../../../assets/icons/hp.png'
import ibm from '../../../assets/icons/ibm.png'
import seagate from '../../../assets/icons/seagate.png'
import inStock from '../../../assets/icons/inStock.png'
import dell from '../../../assets/icons/dell.png'
import DashboardGrid from '../../../components/dashboardGrid';
import Footer from '../../../components/footer';
import { Link } from 'react-router-dom';


const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};
const Cart = () => {



    const items = new Array(3).fill(0)

    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <MainHeader isCart={true} />


                <div className="container mx-auto py-8 px-[4%]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Section: List of Items */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-4">CART</h2>
                            <ul>
                                {/* Example list item */}
                                {
                                    items.map((item) => {
                                        return (

                                            <li className="flex justify-between items-center py-2">
                                                <div className="flex items-center space-x-4 py-2 bg-white">
                                                    <img
                                                        src={"https://basitcomputers.com/wp-content/uploads/2022/09/wd-500.jpg"}
                                                        alt="Item"
                                                        className="w-3/12 object-cover rounded"
                                                    />
                                                    <div>
                                                        <div className='flex justify-between' >
                                                            <h3 className="w-4/6 font-semibold">ST4000NM0023 - Seagate 4TB 7200RPM
                                                                SAS 6Gb/s 128MB 3.5-Inch </h3>
                                                            <div className='rounded-full h-4 w-4 bg-red-100 ml-4' />
                                                        </div>
                                                        <p className="text-black font-bold">$979.00</p>
                                                        <div className="flex items-center justify-between w-1/3 rounded-md mt-4 px-2 py-1 border-2" >
                                                            <span className="text-xl font-bold ml-2" >-</span>
                                                            <span className="text-xl font-bold" >1</span>
                                                            <span className="text-xl font-bold ml-2" >+</span>
                                                        </div>
                                                        <div className="flex items-center justify-center w-3/12 rounded-md mt-2 px-2 py-1 bg-slate-200" >

                                                            <span className="text-xs" >$2.98 SHIPPING</span>

                                                        </div>
                                                        <div className="flex items-center mt-2 " >
                                                            <img className="h-3 w-3" src={inStock} />
                                                            <span className="text-xs ml-2" >In Stock</span>
                                                        </div>

                                                    </div>
                                                </div>

                                            </li>
                                        )
                                    })
                                }
                                {/* Add more list items here */}
                            </ul>
                        </div>

                        {/* Right Section: Order Summary */}
                        <div className="lg:col-span-1 flex flex-col justify-end">
                            <div className="bg-gray-100 px-4 py-6 rounded-lg border-2 border-black ">
                                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                                <div className="flex justify-between mb-2 border-b-2 pt-3 pb-4">
                                    <span className='text-slate-500' >Sub Total:</span>
                                    <span className='font-semibold' >$1,000.00</span>
                                </div>
                                <div className="flex justify-between mb-2 border-b-2 pt-3 pb-4">
                                    <span className='text-slate-500' >Shipping estimate:</span>
                                    <span className='font-semibold' >$600.00</span>
                                </div>
                                <div className="flex justify-between mb-2 border-b-2 pt-3 pb-4">
                                    <span className='text-slate-500' >Tax estimate:</span>
                                    <span className='font-semibold' >$137.00</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span className='font-semibold'>ORDER TOTAL:</span>
                                    <span className='font-semibold' >$1,000.00</span>
                                </div>
                                <Link to={"/checkout"} className='flex justify-center' >
                                    <div className="flex justify-center bg-black rounded-md mt-4 px-2 py-3 w-3/6" >
                                        <span className="text-xs text-white" >CHECKOUT</span>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>




                <Footer />
            </Layout>


        </Flex>
    )
};
export default Cart;