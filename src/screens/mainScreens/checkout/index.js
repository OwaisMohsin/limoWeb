import React from 'react';
import { Layout, Flex } from 'antd';
import MainHeader from '../../../components/header';


import Footer from '../../../components/footer';


const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};
const Checkout = () => {





    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <MainHeader isCart={true} />

                <div className="container mx-auto py-8 px-[4%]">
                    <h2 className="text-2xl font-bold mb-4">CHECKOUT</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Left Section: User Input Form */}
                        <div className="lg:col-span-3">
                            <h2 className="font-semibold mb-4">Billing Detail</h2>
                            <form className="space-y-4">
                                <div className='flex justify-between' >
                                    <div className='w-4/6' >
                                        <label htmlFor="firstName" className="block">First Name <span className='text-red-600' >*</span></label>
                                        <input type="text" id="firstName" name="firstName" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                    </div>
                                    <div className='w-4/6 ml-3' >
                                        <label htmlFor="lastName" className="block">Last Name <span className='text-red-600' >*</span></label>
                                        <input type="text" id="lastName" name="lastName" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="company" className="block">Company Name <span className='text-slate-400' >(Optional)</span></label>
                                    <input type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block">Country / Region <span className='text-red-600' >*</span></label>
                                    <input type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="address" className="block">Street Address</label>
                                    <input placeholder='House number and street name ...' type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                    <input placeholder='Apartment, suite, unit, etc (Optional)' type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block">Town / City <span className='text-red-600' >*</span></label>
                                    <input type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block">State / Country <span className='text-red-600' >*</span></label>
                                    <input type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block">Zip Code <span className='text-red-600' >*</span></label>
                                    <input type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block">Phone Number <span className='text-red-600' >*</span></label>
                                    <input type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block">Email Address <span className='text-red-600' >*</span></label>
                                    <input type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <input className='text-black' type="checkbox" />
                                    <span className='flex-1 ml-2'>Create an account?</span>

                                </div>
                                <div>
                                    <label htmlFor="additionalNotes" className="block font-semibold">Additional Information</label>
                                    <textarea id="additionalNotes" name="additionalNotes" rows="3" className="w-full border border-gray-300 rounded-md px-4 py-2"></textarea>
                                </div>
                            </form>
                        </div>

                        {/* Right Section: Product Details and Card Input Form */}
                        <div className="lg:col-span-2">
                            <h2 className="font-semibold mb-4">Your Order</h2>
                            <div className="bg-slate-200 px-4 py-4 rounded-lg" >
                                <div className='flex border-b-2 border-slate-300 justify-between pb-2' >
                                    <p className='text-xs text-slate-500' >PRODUCT</p>
                                    <p className='text-xs text-slate-500' >SUB TOTAL</p>
                                </div>

                                <div className="mt-2 flex items-center">
                                    {/* Image on the left */}
                                    <div className="mr-2">
                                        <img
                                            src={"https://static-01.daraz.pk/p/643e97248bd6d5d20d2526436e73f186.jpg_750x750.jpg_.webp"}
                                            alt="Icon"
                                            className="h-10 w-10 object-cover"
                                        />
                                    </div>

                                    {/* Text and description on the right */}
                                    <div>
                                        <h3 className="text-xs font-semibold w-10/12">ST4000NM0023 - Seagate 4TB 7200RPM
                                            SAS 6Gb/s 128MB 3.5-Inch</h3>
                                        <p className="text-gray-400 text-xs">x 3</p>
                                    </div>
                                </div>
                                <div className='flex border-b-2 border-slate-300 justify-between pb-2 mt-4' >
                                    <p className='text-xs text-black' >Worlwide standard shipping fee</p>
                                    <p className='text-xs text-red-500' >+$9.50</p>
                                </div>

                                <div className='flex  justify-between pb-2 mt-4' >
                                    <p className='text-xs font-bold text-black' >Order Total</p>
                                    <p className='text-xs font-bold text-green-500' >$1,746.50</p>
                                </div>

                            </div>
                            <div className="bg-slate-300 px-4 py-4 rounded-lg" >
                                <div className='flex items-start'>
                                    <input className='text-black' type="checkbox" />
                                    <div className='ml-2 -mt-1' >
                                        <span className='font-bold text-xs '>Direct Bank Transfer</span>
                                        <p className='text-xs text-slate-500' >
                                            Make your payment directly into our bank account. Please use your
                                            Order ID as the payment reference. Your order will not be shipped
                                            until the funds have cleared in our account.
                                        </p>
                                    </div>

                                </div>
                                <div className='flex items-start mt-3'>
                                    <input className='text-black' type="checkbox" />
                                    <div className='ml-2 -mt-1' >
                                        <span className='font-bold text-xs '>Cash on Delivery</span>
                                    </div>

                                </div>


                                <div className='flex items-center mt-3'>
                                    <input className='text-black' type="checkbox" />
                                    <span className='ml-2 font-bold text-xs '>Credit Card</span>
                                </div>
                                <div className='mt-2' >
                                    <label htmlFor="firstName" className="block">Full Name </label>
                                    <input placeholder='First and last name' type="text" id="firstName" name="firstName" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div className='mt-2' >
                                    <label htmlFor="firstName" className="block">Card Number</label>
                                    <input placeholder='**** **** **** *****' type="text" id="firstName" name="firstName" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                </div>
                                <div className='flex justify-between mt-2' >
                                    <div className='w-4/6' >
                                        <label htmlFor="firstName" className="block">Card Expiry </label>
                                        <input placeholder='09/24' type="text" id="firstName" name="firstName" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                    </div>
                                    <div className='w-4/6 ml-3' >
                                        <label htmlFor="lastName" className="block">CVV</label>
                                        <input placeholder='1234' type="text" id="lastName" name="lastName" className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1" />
                                    </div>
                                </div>

                                <div className='flex items-center mt-3'>
                                    <input className='text-black' type="checkbox" />
                                    <span className='ml-2 text-xs '>Save for future use</span>
                                </div>

                                <div className="flex justify-center bg-black rounded-md mt-4 px-2 py-3" >
                                    <span className="text-xs text-white" >PLACE ORDER</span>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>





                <Footer />
            </Layout>


        </Flex>
    )
};
export default Checkout;