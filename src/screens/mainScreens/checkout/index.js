import React from 'react';
import { Layout, Flex } from 'antd';
import MainHeader from '../../../components/header';
import iconDropdown from '../../../assets/icons/iconDropdown.png'
import iconCards from '../../../assets/icons/iconCards.png'
import mark from '../../../assets/icons/mark.png'


import Footer from '../../../components/footer';


const layoutStyle = {
    backgroundColor: "#000000",
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

                    <p className="text-primary-gold font-semibold text-xl">Confirm Booking</p>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
                        {/* Left Section: User Input Form */}
                        <div className="lg:col-span-3">
                            <div className=" bg-slate-800 rounded-lg p-4">
                                <h2 className="font-semibold text-white text-xl">Customer Info</h2>
                                <div className='flex justify-between mt-2' >
                                    <p className='text-slate-400 text-xs' >Please enter your info</p>
                                    <p className='text-slate-400 text-xs font-semibold' >Step 1 of 4</p>
                                </div>
                                <div className='flex justify-between mt-4' >
                                    <div className='w-4/6' >
                                        <label htmlFor="firstName" className="block font-semibold text-white">Name <span className='text-red-600' >*</span></label>
                                        <input type="text" placeholder='Your name' id="firstName" name="firstName" className="w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2" />
                                    </div>
                                    <div className='w-4/6 ml-5' >
                                        <label htmlFor="lastName" className="block font-semibold text-white">Number <span className='text-red-600' >*</span></label>
                                        <input type="text" placeholder='Phone number' id="lastName" name="lastName" className="w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2" />
                                    </div>
                                </div>
                                <div className='flex justify-between mt-4' >
                                    <div className='w-4/6' >
                                        <label htmlFor="firstName" className="block font-semibold text-white">Address <span className='text-red-600' >*</span></label>
                                        <input type="text" placeholder='Address' id="firstName" name="firstName" className="w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2" />
                                    </div>
                                    <div className='w-4/6 ml-5' >
                                        <label htmlFor="lastName" className="block font-semibold text-white">Town/City <span className='text-red-600' >*</span></label>
                                        <input type="text" placeholder='Town or city' id="lastName" name="lastName" className="w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-slate-800 rounded-lg p-4 mt-6">
                                <h2 className="font-semibold text-white text-xl">Booking Info</h2>
                                <div className='flex justify-between mt-2' >
                                    <p className='text-slate-400 text-xs' >Please select your booking date</p>
                                    <p className='text-slate-400 text-xs font-semibold' >Step 2 of 4</p>
                                </div>
                                <div className='flex  mt-4 items-center'>
                                    <img className='h-3' src={mark} alt="Mark" />
                                    <p className='font-semibold ml-2 text-white'>Booking From</p>
                                </div>
                                <div className='flex justify-between mt-4' >
                                    <div className='w-4/6' >
                                        <label htmlFor="firstName" className="block font-semibold text-white">Location <span className='text-red-600' >*</span></label>
                                        <div className='flex justify-between items-center w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2'>
                                            <p className=' text-slate-500 mr-4 '>City</p>
                                            <img className='h-4' src={iconDropdown} alt="Dropdown" />
                                        </div>
                                    </div>
                                    <div className='w-4/6 ml-5' >
                                        <label htmlFor="lastName" className="block font-semibold text-white">Date <span className='text-red-600' >*</span></label>
                                        <div className='flex justify-between items-center w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2'>
                                            <p className=' text-slate-500 mr-4'>Date</p>
                                            <img className='h-4' src={iconDropdown} alt="Dropdown" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-4' >
                                    <div className='w-4/6' >
                                        <label htmlFor="firstName" className="block font-semibold text-white">Time <span className='text-red-600' >*</span></label>
                                        <div className='flex mt-2 justify-between items-center w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2'>
                                            <p className=' text-slate-500 mr-4 '>Time</p>
                                            <img className='h-4' src={iconDropdown} alt="Dropdown" />
                                        </div>
                                    </div>
                                    <div className='w-4/6 ml-5' >
                                    </div>
                                </div>
                                <div className='flex  mt-4 items-center'>
                                    <img className='h-3' src={mark} alt="Mark" />
                                    <p className='font-semibold ml-2 text-white'>Booking Till</p>
                                </div>
                                <div className='flex justify-between mt-4' >
                                    <div className='w-4/6' >
                                        <label htmlFor="firstName" className="block font-semibold text-white ">Time <span className='text-red-600' >*</span></label>
                                        <div className='flex justify-between items-center w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2'>
                                            <p className=' text-slate-500 mr-4 '>Time</p>
                                            <img className='h-4' src={iconDropdown} alt="Dropdown" />
                                        </div>
                                    </div>
                                    <div className='w-4/6 ml-5' >
                                        <label htmlFor="lastName" className="block font-semibold text-white">Date <span className='text-red-600' >*</span></label>
                                        <div className='flex justify-between items-center w-full bg-slate-100 border-gray-300 rounded-md px-4 py-2 mt-2'>
                                            <p className=' text-slate-500 mr-4'>Date</p>
                                            <img className='h-4' src={iconDropdown} alt="Dropdown" />
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className=" bg-slate-800 rounded-lg p-4 mt-6">
                                <h2 className="font-semibold text-xl text-white">Payment Method</h2>
                                <div className='flex justify-between mt-2' >
                                    <p className='text-slate-400 text-xs' >Please enter your payment method</p>
                                    <p className='text-slate-400 text-xs font-semibold' >Step 3 of 4</p>
                                </div>
                                <div className='bg-slate-400 pb-4 p-2 px-4 rounded-lg mt-4' >

                                    <div className='flex mt-4 items-center'>
                                        <img className='h-3' src={mark} alt="Mark" />
                                        <div className='flex justify-between items-center w-full' >
                                            <p className='font-semibold ml-2'>Credit Card</p>
                                            <img className='h-4 justify-end' src={iconCards} alt="Mark" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-4' >
                                        <div className='w-4/6' >
                                            <label htmlFor="firstName" className="block font-semibold ">Card Number <span className='text-red-600' >*</span></label>
                                            <input type="text" placeholder='Card number' id="firstName" name="firstName" className="w-full bg-white border-gray-300 rounded-md px-4 py-2 mt-2" />
                                        </div>
                                        <div className='w-4/6 ml-5' >
                                            <label htmlFor="lastName" className="block font-semibold">Expiration <span className='text-red-600' >*</span></label>
                                            <input type="text" placeholder='DD/MM/YY' id="lastName" name="lastName" className="w-full bg-white border-gray-300 rounded-md px-4 py-2 mt-2" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-4' >
                                        <div className='w-4/6' >
                                            <label htmlFor="firstName" className="block font-semibold">Card Holder <span className='text-red-600' >*</span></label>
                                            <input type="text" placeholder='Card holder' id="firstName" name="firstName" className="w-full bg-white border-gray-300 rounded-md px-4 py-2 mt-2" />
                                        </div>
                                        <div className='w-4/6 ml-5' >
                                            <label htmlFor="lastName" className="block font-semibold">CVC <span className='text-red-600' >*</span></label>
                                            <input type="text" placeholder='CVC' id="lastName" name="lastName" className="w-full bg-white border-gray-300 rounded-md px-4 py-2 mt-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-slate-800 rounded-lg p-4 mt-6">
                                <h2 className="font-semibold text-xl text-white">Confirmation</h2>
                                <div className='flex justify-between mt-2' >
                                    <p className='text-slate-400 text-xs' >We are getting to the end. Just few clicks and your booking is ready!</p>
                                    <p className='text-slate-400 text-xs font-semibold' >Step 4 of 4</p>
                                </div>
                                <div className='flex bg-slate-200 mt-4 p-2 px-4 rounded-md items-center' >
                                    <input className='text-black size-3' type="checkbox" />
                                    <p className='ml-3 font-semibold' >I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>

                                </div>
                                <div className='flex bg-slate-200 my-4 p-2 px-4 rounded-md items-center' >
                                    <input className='text-black size-3' type="checkbox" />
                                    <p className='ml-3 font-semibold' >I agree with our terms and conditions and privacy policy.</p>

                                </div>
                                <button onClick={() => { }} className="bg-primary-gold hover:bg-primary-gold text-white font-bold py-2 px-4 rounded">
                                    Book Now
                                </button>
                            </div>


                        </div>

                        {/* Right Section: Product Details and Card Input Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-slate-800 px-4 py-4 rounded-lg" >
                                <h2 className="font-semibold text-xl text-white">Booking Summary</h2>
                                <p className='text-slate-400 text-xs mt-2' >Prices may change depending on the length of the booking and the price of your booked car.</p>


                                <div className="mt-6 flex items-center">
                                    {/* Image on the left */}
                                    <div className="mr-2">
                                        <img
                                            src={"https://goodtimelimo.ca/wp-content/uploads/2023/09/Night-Out-Limousine-service-in-Newmarket-1024x507.png"}
                                            alt="Icon"
                                            className="h-20 w-30 object-cover rounded-lg"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-semibold w-10/12 ml-2 text-primary-gold">Nissan GT - R</h3>
                                </div>
                                <div className='flex border-b-2 border-slate-300 justify-between pb-2 mt-4' >

                                </div>

                                <div className='flex  justify-between pb-2 mt-4' >
                                    <p className=' text-slate-400' >Subtotal</p>
                                    <p className='font-bold text-white' >$80.00</p>
                                </div>
                                <div className='flex  justify-between pb-2 mt-4' >
                                    <p className=' text-slate-400' >Tax</p>
                                    <p className='font-bold text-white' >$0.00</p>
                                </div>


                                <div className='flex bg-slate-200 mt-4 p-2 px-4 rounded-md items-center justify-between' >
                                    <input placeholder='Apply promo code' className='text-black bg-slate-200' />
                                    <p className='font-semibold' >Apply Now</p>

                                </div>


                                <div className='flex justify-between w-full mt-4 items-center' >
                                    <div>
                                        <p className=' text-xl font-semibold text-white' >Total Booking Price</p>
                                        <p className=' text-slate-400' >Overall price and includes booking discount</p>
                                    </div>
                                    <p className=' text-2xl font-bold text-white' >$80.00</p>
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