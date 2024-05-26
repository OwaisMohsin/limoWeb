import React from 'react';
import { Link } from 'react-router-dom';
import iconHeart from '../../assets/icons/iconHeart.png'
import iconHeartfill from '../../assets/icons/iconHeartfill.png'
import iconFuel from '../../assets/icons/iconFuel.png'
import iconCapacity from '../../assets/icons/iconCapacity.png'
import iconWheel from '../../assets/icons/iconWheel.png'

const DashboardGrid = (props) => {

    return (
        <div className="px-[4%] mt-8">
            <p className="text-primary-gold font-semibold text-xl">{props.label}</p>

            <div className="flex flex-wrap justify-center md:justify-start mx-auto mt-6">
                {props.data.map((item, index) => (
                    <Link key={index} to={"/productDetails"} className="w-full md:w-1/4 p-4">
                        <div className="bg-slate-800 rounded-xl shadow-md flex flex-col items-center justify-center py-4 px-2">
                            <div className="flex justify-between  w-full px-3">
                                <div>
                                    <p className="text-lg text-primary-gold font-bold">Car Name</p>
                                    <p className="text-sm font-semibold text-white">Model/Brand</p>
                                </div>
                                <img className='h-5 mt-2' src={iconHeart} />
                            </div>
                            <div className="flex justify-center mt-4">
                                <img className=" w-11/12 rounded-xl h-auto shadow-md" src={"https://goodtimelimo.ca/wp-content/uploads/2023/09/Night-Out-Limousine-service-in-Newmarket-1024x507.png"} alt="Product" />
                            </div>
                            <div className='flex items-center mt-4 justify-between w-full px-3' >
                                <div className='flex items-center' >
                                    <img className='h-6' src={iconFuel} />
                                    <span className=' ml-1 text-sm text-slate-400' >70L</span>
                                </div>
                                <div className='flex items-center' >
                                    <img className='h-6' src={iconWheel} />
                                    <span className=' ml-1 text-sm text-slate-400' >Manual</span>
                                </div>
                                <div className='flex items-center' >
                                    <img className='h-6' src={iconCapacity} />
                                    <span className=' ml-1 text-sm text-slate-400' >6 People</span>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 w-full px-3">
                                <div>
                                    <div>
                                        <span className="text-lg text-white font-bold">$72.00/</span>
                                        <span className="text-sm font-semibold text-primary-gold"> day</span>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-400">$80.00</p>
                                </div>
                                <div className='bg-primary-gold item-center py-2 rounded-md px-3 h-2/4' >
                                    <p className='text-white'>Book Now</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DashboardGrid;
